import React from "react";
import {  connect } from "react-redux";

function Counter2(props){
    console.log(props);
    return(
        <div className="border border-2 border-primary m-2 p-2">
            <h1>Counter:{props.counter2.count}</h1>
            <button onClick={()=>{props.dispatch({type:'Inc2'})}} style={{backgroundColor:'pink'}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'Dec2'})}}  style={{backgroundColor:'yellow'}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:'Rec2'})}} style={{backgroundColor:'blue'}}>React</button>
        </div>
    )
}
export default connect((store)=>{return store})(Counter2)