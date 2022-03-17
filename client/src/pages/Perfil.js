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
    const [oficiosList, setOficiosList] = useState(false)
    const [oficiosList2, setOficiosList2] = useState(false)
    const [oficiosList3, setOficiosList3] = useState(false)
    const [idiomasList, setIdiomasList] = useState(false)
    const [idiomasList2, setIdiomasList2] = useState(false)
    const [idiomasList3, setIdiomasList3] = useState(false)

    useEffect(() => {
        if (auth === true && typeof (dataUser) !== "string" && typeof (usuario) !== "string") {
            setLoading(false)
            setLoaded(true)
            if (dataUser.data[0].oficio.length === 1) {
                setOficiosList(true)
            }
            if (dataUser.data[0].oficio.length === 2) {
                setOficiosList2(true)
            }
            if (dataUser.data[0].oficio.length >= 3) {
                setOficiosList3(true)
            }
            if (dataUser.data[0].idiomas.length === 1) {
                setIdiomasList(true)
            }
            if (dataUser.data[0].idiomas.length === 2) {
                setIdiomasList2(true)
            }
            if (dataUser.data[0].idiomas.length >= 3) {
                setIdiomasList3(true)
            }
            if (auth === true) {

            }
        } else if (auth === false) {
            window.location.href = "/"
        }
    }, [dataUser, usuario, auth])



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
                        <span className="Hola-Perfil">{usuario.nombre}</span>
                    </div>
                    <div className="info-texto-Perfil">
                        <span className="Sub-Perfil"> {dataUser.data[0].edad} años,  {dataUser.data[0].genero}</span>

                    </div>
                    <br />
                    <div className="Info-Perfil">
                        <span className="Texto-Perfil">Idiomas</span>
                        <div className="Info-Perfil">
                            {idiomasList ? (<span className="Sub-Perfil">{dataUser.data[0].idiomas[0]}</span>) : ""}
                            {idiomasList2 ? (<span className="Sub-Perfil">{dataUser.data[0].idiomas[0]}, {dataUser.data[0].idiomas[1]} </span>) : ""}
                            {idiomasList3 ? (<span className="Sub-Perfil">{dataUser.data[0].idiomas[0]}, {dataUser.data[0].idiomas[1]}, {dataUser.data[0].idiomas[2]} </span>) : ""}
                        </div>
                        <div className="Info-Perfil">
                            <br />
                            <span className="Texto-Perfil">¿Cómo soy?</span>
                            <div className="Info-Perfil">
                                <span className="Sub-Perfil">{dataUser.data[0].caracter[0]}, {dataUser.data[0].caracter[1]}, {dataUser.data[0].caracter[2]}, {dataUser.data[0].caracter[3]}, {dataUser.data[0].caracter[4]}</span>
                            </div>
                        </div>
                        <div className="Info-Perfil">
                            <br />
                            <span className="Texto-Perfil">¿De qué he trabajado?</span>
                            <div className="Info-Perfil">
                                {oficiosList ? (<span className="Sub-Perfil">{dataUser.data[0].oficio[0]}</span>) : ""}
                                {oficiosList2 ? (<span className="Sub-Perfil">{dataUser.data[0].oficio[0]}, {dataUser.data[0].oficio[1]} </span>) : ""}
                                {oficiosList3 ? (<span className="Sub-Perfil">{dataUser.data[0].oficio[0]}, {dataUser.data[0].oficio[1]}, {dataUser.data[0].oficio[2]} </span>) : ""}
                            </div>
                        </div>

                    </div>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Perfil