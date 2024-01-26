import { combineReducers,createStore } from "redux";

import CounterReducer from "../Reducer/counter";
import CounterReducer1 from "../Reducer/counter1";
import counter1 from "../counter1";
import CounterReducer2 from "../Reducer/counter2";


let store = createStore(combineReducers({counter:CounterReducer,counter1:CounterReducer1,counter2:CounterReducer2}))

export default store