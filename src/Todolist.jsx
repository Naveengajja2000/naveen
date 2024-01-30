import React from "react";
import {connect} from 'react-redux';


function TodoList (props) {
    console.log(props)
    return (
        <div className="border border-2 border-primary m-2 p-2">
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:'NEWTODO',payload:e.target.value})}} style={{borderColor:'black'}}/>
            <button onClick={()=>{props.dispatch({type:"ADDTODO"})}} style={{backgroundColor:'green'}} className="m-3">Add Task</button>
            <ul>
                {
                    props.todos.map((todo,i)=>{
                        return(
                            <li>
                                {todo}

                            <button onClick={()=>{props.dispatch({type:'DEL',ind:i})}} style={{backgroundColor:'red'}} className="m-2">Delete</button>
                            </li>
                        )
                    }) 
                }
            </ul>
        </div>
    )
}

export default connect(store=>store) (TodoList);