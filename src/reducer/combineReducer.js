import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import doneReducer from "./doneReducer";

import { combineReducers } from "redux";

const allReducer=combineReducers({
  counterReducer,authReducer,doneReducer
});

export default allReducer;

//Since we have more than one reducer, we need to import the combineReducer 
//helper function from Redux. This function turns our reducers into a single 
//reducer that we can pass to the createStore API. 
//So we pass in the reducers like so:
//combineReducer({reducer-a, reducer-b, reducer-c})