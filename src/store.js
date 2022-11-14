import { createStore } from "redux";
import allReducer from "./reducer/combineReducer";


export const store= createStore(allReducer);