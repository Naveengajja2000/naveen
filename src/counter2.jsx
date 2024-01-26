import React from "react";
import {  connect } from "react-redux";

function Counter1(props){
    console.log(props);
    return(
        <div className="border border-2 border-primary m-2 p-2">
            <h1>Counter:{props.counter1.count}</h1>
            <button onClick={()=>{props.dispatch({type:'Inc1'})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'Dec1'})}} >Decrement</button>
            <button onClick={()=>{props.dispatch({type:'Rec1'})}} >React</button>
        </div>
    )
}
export default connect((store)=>{return store})(Counter1)