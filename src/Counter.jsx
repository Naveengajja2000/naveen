import React from "react";
import { connect } from "react-redux";

function Counter(props){
    console.log('Counter REnders');
    return (
        <div className="border border-2 border-primary m-2 p-2">
            <h1>Counter : {props.count}</h1>
            <button onClick={()=>{props.Inc()}}className="m-3">Increment</button>
            <button onClick={()=>{props.Dec()}}>Decrement</button>
        </div>
    )
}
function mapStateToProps(state){
    return state.counter
}
function mapDispatchToProps(dispatch){
    return {
        Inc:()=>{dispatch({type:'Inc'})},
        Dec:()=>{dispatch({type:'Dec'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter)