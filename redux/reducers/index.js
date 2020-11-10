import ordersReducer from "./orders";
import useReducer from "./user";
import { combineReducers } from "redux";
import productsReducer from "./products";
import userAddress from "./address";
import countriesList from "./countries"
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
  addresses: userAddress,
  countries: countriesList,
  errorMsg: errorsReducer,
  orders: ordersReducer,
});

export default rootReducer;
