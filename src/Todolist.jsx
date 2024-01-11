import React from "react";

function Todolist(){
    var[tasks,setTasks] = React.useState([]);
    var addTask = () => {
        var newTask = document.getElementById('d1').value;
        setTasks([...tasks,newTask]);
    };
    return(
        <div>
            <h1>TodoList</h1>
            <input type='text' id='d1'/>
            <button onClick={addTask}>save</button>
            <ol start='1' type='a'>
                {tasks.map((t,i)=>{
                    return <li key={i}>{t}</li>
                })
                }
            </ol>
        </div>
    )
}

export default Todolist;