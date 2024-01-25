import React from 'react'
import { Outlet } from 'react-router-dom';


function App(){
    return(
        <div className="mybox">
           <h1>Welcome to Naveen Gajja</h1>
           <a href="/countries">Countries</a>
           <Outlet></Outlet>
        </div>
    )
}

export default App;