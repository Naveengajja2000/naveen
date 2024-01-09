import React from "react";
function Counter(){
    var [count,setCount]=React.useState(0);
    function inc(){
        count++;
        setCount(count)
    }
    function dec(){
        count--;
        setCount(count)
    }
    return(
        <div>
            <h1>Count:<span id='dd'>{count}</span></h1>
            <button onClick={inc} style={{color:'blue',backgroundColor:'lightgreen'}}>Inc</button>
            <button onClick={dec} style={{color:'red',backgroundColor:'lightgreen'}}>Dec</button>
        </div>
    )
}
export default Counter;