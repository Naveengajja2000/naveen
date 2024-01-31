import CounterReducer from "./reduger/counterReducer";
import TodoReducer from "./reduger/todoReducer";

import { combineReducers,createStore } from "redux";

let store  = createStore(combineReducers({counter:CounterReducer,todolist:TodoReducer}))

export default store