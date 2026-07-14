import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
