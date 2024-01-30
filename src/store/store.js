import TodoReducer from "./TodoReducer";

import { createStore } from "redux";


let store = createStore (TodoReducer)

export default store;