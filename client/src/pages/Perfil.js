import React, { useState } from "react";


function Perfil() {

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