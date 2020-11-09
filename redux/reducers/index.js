import productsReducer from "./products";
import user from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  user: user,
});

export default rootReducer;
