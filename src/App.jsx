import React from 'react'
import { Link, Outlet } from 'react-router-dom';


function App(){
    return(
        <div className="mybox">
            <h1>App</h1>
            <a href="/xyz">Go To NN</a><br></br>
            <Link to="/xyz">Go toxyz otherway</Link>&nbsp;&nbsp;
            <Link to="/aboutus">Aboutus</Link>&nbsp;&nbsp;
            <Link to="/contactus">Contactus</Link>&nbsp;&nbsp;
            <Outlet></Outlet>
        </div>
    )
}

export default App;