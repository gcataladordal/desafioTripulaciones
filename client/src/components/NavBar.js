import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="topnav">
            <Link to="/homelogueado"><span className="spanNavBar">Home</span></Link>
            <Link to="/colivings"><span className="spanNavBar">Colivings</span></Link>
            <Link to="/perfil"><span className="spanNavBar">Perfil</span></Link>

        </div>
    )
}

export default NavBar