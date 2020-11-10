import { SET_ORDERS } from "./actionTypes";

import instance from "./instance";
export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("orders/");
    const orders = res.data;
    dispatch({
      type: SET_ORDERS,
      payload: orders,
    });
  } catch (error) {
    console.error(error);
  }
};

export const checkout = (orderData) => async dispatch => {
  try{
      const res = await instance.post("order/checkout/", orderData)
      const order = res.data
      dispatch(fetchOrders())
      console.log("sent the order")
      // Cookies.remove("cart")
      // dispatch(setCart())

      
  } catch (error){
      dispatch({
          type: SET_ERRORS,
          payload: error.response.data,
        });
  }
}
