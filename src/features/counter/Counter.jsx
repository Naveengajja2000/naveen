import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { increment,decrement,react } from "./counterSlice";

function Counter() {
    var count = useSelector ((state)=>{return state.c.count})
    var dispatch = useDispatch()
    return (
        <div className="border border-5 border-danger m-2 p-2">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(react())}}>React</button> 
        </div>
    )
}

export default Counter