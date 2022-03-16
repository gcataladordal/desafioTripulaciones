import React, { useState, useEffect } from "react";
import InfoAuth from "../hooks/InfoAuth";
import InfoUsuario from "../hooks/InfoUsuario";
import logonaranjo from "../img/logonaranjoletras.png";

function Home() {

    const [usuario, auth] = InfoAuth("obtieneinfo")
    const [informacionUsuarios] = InfoUsuario("busquserscomp");


    useEffect(() => {
        if (auth === true) {
            if (informacionUsuarios === "noTest") {
                window.location.href = "/realizaeltest"
            } else {
                window.location.href = "/homelogueado"
            }
        } else if (auth === false) {
            window.location.href = "/registro"
        }
    }, [informacionUsuarios, auth])


    return (
        <div className="Splash-screen">
            <img src={logonaranjo} className="logoNaranjo" alt="logo naranjo"></img>
        </div>
    )
}

export default Home