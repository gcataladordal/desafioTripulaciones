import React, { useState, useEffect } from "react";
import InfoAuth from "../hooks/InfoAuth";

function Perfil() {

    const [usuario, auth] = InfoAuth("obtieneinfo")
    
    useEffect(() => {
        if (auth === true) {
        } else if (auth === false ) {
            window.location.href = "/"
        }
    }, [auth])


    const crearColiving = () => {
        window.location.href = "http://localhost:3000/registercoliving"
    }

    return (
        <div> 
            <div id="crearColiving">
            <button type="button" onClick={crearColiving}>Registrar Coliving</button>
            </div>
            <br />
            <div id="modificarPerfil">
                <button type="button">Modificar Perfil</button>
            </div>
            <br />
            <div id="eliminarPerfil">
            <button type="button">Eliminar Perfil</button>
            </div>
        </div>
    )
}

export default Perfil