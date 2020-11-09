import productsReducer from "./products";
import user from "./user";
import { combineReducers } from "redux";
import { useReducer } from "react";

const rootReducer = combineReducers({
  products: productsReducer,
  user: useReducer,
});

export default rootReducer;
