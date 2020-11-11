import { SET_ORDERS } from "./actionTypes";
import instance from "./instance";
import {setCart} from "./cart"

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

export const checkout = (orderData, navigation) => async dispatch => {
  try{
      const res = await instance.post("order/checkout/", orderData)
      const order = res.data
      dispatch(fetchOrders())
      dispatch(setCart())
      // await AsyncStorage.removeItem("cart");
      navigation.replace("Cart")
      alert("Tnak you! see you soon")
  } catch (error){
      dispatch({
          type: SET_ERRORS,
          payload: error.response.data,
        });
  }
}
