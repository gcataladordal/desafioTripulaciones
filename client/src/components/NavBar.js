import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"
import InfoAuth from "../hooks/InfoAuth";


function NavBar() {

    const [showLogueado, setShowLogueado] = useState(false);
    const [showNoLogueado, setShowNoLogueado] = useState(true);

    const cookie = new Cookies()

    const [usuario, auth] = InfoAuth("obtieneinfo")
    
    useEffect(() => {
        if (auth === true) {
            // window.location.href = "/home"
            setShowLogueado(true)
            setShowNoLogueado(false)
        } else if (auth === false) {
            setShowLogueado(false)
            setShowNoLogueado(true)
        }
    }, [auth])



    const logout = () => {
        cookie.remove("token")
        window.location.href = "http://localhost:3000/"
    }

    return (
        <div className="topnav">     
            <Link to="/">Home</Link>
            <Link to="/colivings">Colivings</Link>
            {showNoLogueado ? (<Link to="/registeruser">Registro</Link>) : ""}          
            {showNoLogueado ? (<Link to="/login">Iniciar Sesión</Link>) : ""} 
            {showLogueado ? (<Link to="/testusuario">Test</Link>) : ""} 
            {showLogueado ? (<Link to="/buscacoliving">Busqueda Coliving</Link>) : ""} 
            {showLogueado ? (<Link to="/buscausuario">Busqueda Usuario</Link>) : ""} 
            {showLogueado ? (<Link to="/perfil">Perfil</Link>) : ""}

            {showLogueado ? (<Link to="/" onClick={logout}>Cerrar Sesión</Link>) : ""} 

        </div>
    )
}

export default NavBar