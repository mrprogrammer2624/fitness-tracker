import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "@/Reducer/authReducer";
import fitnessReducer from "@/Reducer/fitnessReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  fitness: fitnessReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
