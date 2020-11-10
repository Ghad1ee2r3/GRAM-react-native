import productsReducer from "./products";
import ordersReducer from "./orders";
import userCart from "./cart"

import useReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
  orders: ordersReducer,
  cart: userCart,

});

export default rootReducer;
