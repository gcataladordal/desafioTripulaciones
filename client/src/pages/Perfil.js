import React, { useEffect, useState } from "react";
import InfoAuth from "../hooks/InfoAuth";
import NavBar from "../components/NavBar";
import setting from "../img/Setting.png";
import fotoPerfil from "../img/perfil.png"
import logonaranjo from "../img/logonaranjo.png"
import InfoPerfil from "../hooks/InfoPerfil";

function Perfil() {

    const [usuario, auth] = InfoAuth("obtieneinfo")
    const [dataUser] = InfoPerfil("infodataperfil")
    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)

    console.log(dataUser.data)
    useEffect(() => {
        if (typeof(dataUser) === "object") {
             setLoading(false)
             setLoaded(true)
            if (auth === true) {
               
            } else if (auth === false) {
                window.location.href = "/"
            }
        }
    }, [dataUser])


    const clickSettings = () => {
        window.location.href = "/ajustesusuario"
    }

    const crearColiving = () => {
        window.location.href = "/registercoliving"
    }


    if (loading) {
        return (
            <div className="Splash-screen">
                <img src={logonaranjo} className="logoNaranjo" alt="logo naranjo"></img>
            </div>
        )
    }

    if (loaded) {
        return (
            <div>
                <div className="Frame-3628">
                    <div className="Header-Perfil">
                        <span className="Texto-Perfil">Perfil</span>
                        <img src={setting} alt="settings" className="Setting-Pic" onClick={clickSettings}></img>
                    </div>
                    <div className="Buttons-Perfil">
                        <button type="button" className="Btn-Default-Perfil" onClick={crearColiving}><span className="Texto-Blanco-Perfil">Registrar Coliving</span></button>
                    </div>
                    <div className="foto-de-Perfil">
                        <img src={fotoPerfil} alt="foto perfil" id="foto-Perfil-Perfil"></img>
                    </div>
                    <div className="info-Perfil">
                        <span className="Hola-Perfil">Angeles</span>
                    </div>
                    <div className="info-texto-Perfil">
                        <span className="Sub-Perfil">60 años, mujer</span>

                    </div>
                </div>
                <NavBar />
            </div>
        )
    }
}
export default Perfil