import React, { useEffect } from "react";
import InfoAuth from "../hooks/InfoAuth";
import NavBar from "../components/NavBar";
import Cookies from "universal-cookie";

function Perfil() {

    const cookie = new Cookies()

    const [usuario, auth] = InfoAuth("obtieneinfo")
    
    useEffect(() => {
        if (auth === true) {
        } else if (auth === false ) {
            window.location.href = "/"
        }
    }, [auth])


    const logout = () => {
        cookie.remove("token")
        window.location.href = "/"
    }

    const crearColiving = () => {
        window.location.href = "/registercoliving"
    }

    const irATest = () => {
        window.location.href = "/testusuario"
    }

    return (
        <div>
        <div className="Frame-3628"> 
            <div id="crearColiving">
            <button type="button" className="Btn-Default-Home"  onClick={crearColiving}><span className="Texto-Blanco">Registrar Coliving</span></button>
            </div>
            <br />
            <div id="modificarPerfil">
                <button type="button" className="Btn-Default-Home" onClick={irATest}>Modificar Perfil</button>
            </div>
            <br />
            <div id="eliminarPerfil">
            <button type="button" className="Btn-Default-Home">Eliminar Perfil</button>
            </div>
            <div id="cerrarSesión">
            <button type="button"className="Btn-Default-Home" onClick={logout}>Cerrar Sesión</button>
            </div>
        </div>
        <NavBar />
        </div>
    )
}

export default Perfil