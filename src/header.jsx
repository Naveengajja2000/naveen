import React from "react";
function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info rounded">

        <div className="collapse navbar-collapse d-flex flex-wrap justify-content-around" id="navbarSupportedContent ">

            <div>HOME</div>
            <div>CONTACT </div>
            <div>ABOUT US</div>
            <div>
                <input className="rounded " placeholder="Search..." type="text" name="mens" id="" />
            </div>


        </div>
    </nav>
    )
}
export default Header