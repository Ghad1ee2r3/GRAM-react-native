import productsReducer from "./products";
import useReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
});

export default rootReducer;
