import ordersReducer from "./orders";
import useReducer from "./user";
import { combineReducers } from "redux";
import productsReducer from "./products";
import userAddress from "./address";
import countriesList from "./countries"
import errorsReducer from "./errors";
import userCart from "./cart"

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
  addresses: userAddress,
  countries: countriesList,
  errorMsg: errorsReducer,
  orders: ordersReducer,
  cart: userCart,
});

export default rootReducer;
