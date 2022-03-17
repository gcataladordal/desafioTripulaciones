import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Cookies from "universal-cookie";

let cookie = new Cookies()


function Settings() {

    const logout = () => {
        cookie.remove("token")
        window.location.href = "/"
    }


    const irATest = () => {
        window.location.href = "/testusuario"
    }

    return (

        <div>
        
            <div className="Frame-3628">
            <div id="modificarPerfil">
                        <button type="button" className="Btn-Default-Perfil" onClick={irATest}><span className="Texto-Blanco-Perfil">Modificar Perfil</span></button>
                    </div>
                    <br />
                    <div id="eliminarPerfil">
                        <button type="button" className="Btn-Default-Perfil"><span className="Texto-Blanco-Perfil">Eliminar Perfil</span></button>
                    </div>
                    <br />
                    <div id="cerrarSesión">
                        <button type="button" className="Btn-Default-Perfil" onClick={logout}><span className="Texto-Blanco-Perfil">Cerrar Sesión</span></button>
                    </div>
            </div>
           <NavBar /> 
        </div>
    )
}


export default Settings