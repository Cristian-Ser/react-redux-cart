import { createStore, combineReducers } from "redux";
import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
