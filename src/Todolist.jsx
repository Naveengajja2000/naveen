import React from "react";
import { connect } from "react-redux";

function Todolist(props){
    console.log('Todolist sad');
    let [item,setItem] = React.useState('')
    return(
        <div  className="border border-2 border-info m-2 p-2">
            <h1>Todolist:</h1>
            <input type="text" onChange={(e)=>{setItem(e.target.value)}} className="m-3"/>
            <button onClick={()=>{props.addTask(item)}}>AddTodo</button>
            <ul>
                {
                    props.todos.map((t)=>{
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}



function mapStateToProps(state){
   return state.todolist
}
function mapDispatchToProps(dispatch){
    return {
        addTask:(item)=>{dispatch({type:'ADDTODO',payload:item})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Todolist)