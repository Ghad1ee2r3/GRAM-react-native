import productsReducer from "./products";
import ordersReducer from "./orders";

import useReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
  orders: ordersReducer,
});

export default rootReducer;
