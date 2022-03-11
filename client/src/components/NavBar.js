import React, { useState } from "react";
import {  Link } from "react-router-dom";

function NavBar() {


    const [showCerrarSesion, setShowCerrarSesion] = useState(true);
    const [showRegister, setShowRegister] = useState(true);
    const [showIniciarSesion, setShowIniciarSesion] = useState(true);
    const [showPerfil, setShowPerfil] = useState(true);

    const logout = () => {
        console.log("sesión cerrada")
    }

    return (
        <div className="topnav">     
            <Link to="/">Home</Link>
            <Link to="/colivings">Colivings</Link>
            {showRegister ? (<Link to="/registeruser">Registro</Link>) : ""}          
            {showIniciarSesion ? (<Link to="/login">Iniciar Sesión</Link>) : ""} 
            {showPerfil ? (<Link to="/testusuario">Test</Link>) : ""} 
            {showPerfil ? (<Link to="/formbusqueda">Busqueda Coliving</Link>) : ""} 
            {showPerfil ? (<Link to="/perfil">Perfil</Link>) : ""} 
            {showCerrarSesion ? (<Link to="/" onClick={logout}>Cerrar Sesión</Link>) : ""} 

        </div>
    )
}

export default NavBar