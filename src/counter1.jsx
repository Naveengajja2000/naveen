import React from "react";
import {  connect } from "react-redux";

function Counter(props){
    console.log(props);
    return(
        <div className="border border-2 border-primary m-2 p-2">
            <h1>Counter:{props.counter.count}</h1>
            <button onClick={()=>{props.dispatch({type:'Inc'})}} style={{backgroundColor:'red'}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'Dec'})}} style={{backgroundColor:'blue'}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:'Rec'})}}  style={{backgroundColor:'green'}}>React</button>
            
        </div>
    )
}
export default connect((store)=>{return store})(Counter)