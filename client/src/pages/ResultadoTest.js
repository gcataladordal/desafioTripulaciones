import React, { useState, useEffect } from "react";
import InfoUsuario from "../hooks/InfoUsuario";
import NavBar from "../components/NavBar";
import logonaranjo from "../img/logonaranjo.png";
import fotoperfil from "../img/perfil.png";
import InfoAuth from "../hooks/InfoAuth";

function ResultadoTest() {


    const [usuario, auth] = InfoAuth("obtieneinfo")
    const [informacionUsuarios] = InfoUsuario("busquserscomp");
    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)

    console.log(informacionUsuarios)

    useEffect(() => {
        if (auth === true && typeof(informacionUsuarios) === "object" && typeof(usuario) !== "string") {
            setLoaded(true)
            setLoading(false)
        } else if (auth === false) {
            window.location.href = "/registro"
        }
    }, [auth, informacionUsuarios, usuario])

  

    if (loading) {
        return (
            <div className="Splash-screen">

                <img src={logonaranjo} className="logoNaranjo" alt="logo naranjo"></img>

            </div>
        )
    }


    const clickboton = () => {
        console.log("hola")
    }
    const clickboton2 = () => {
        console.log("hola")
    }

    if (loaded) {
        return (
            <div>
                <div className="resultado-Test">
                    <span className="Usuarios-ms-compatibles">
                        Usuarios más compatibles
                    </span>
                    <div className="contenedor-Cards">
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[1].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[16].edad} años, {informacionUsuarios[16].genero} | {informacionUsuarios[16].idiomas}</span>
                                    </div>
                                </div>
                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[2].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[17].edad} años, {informacionUsuarios[17].genero} | {informacionUsuarios[17].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[3].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[18].edad} años, {informacionUsuarios[18].genero} | {informacionUsuarios[18].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[4].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[19].edad} años, {informacionUsuarios[19].genero} | {informacionUsuarios[19].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[5].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[20].edad} años, {informacionUsuarios[20].genero} | {informacionUsuarios[20].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[6].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[21].edad} años, {informacionUsuarios[21].genero} | {informacionUsuarios[21].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[7].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[22].edad} años, {informacionUsuarios[22].genero} | {informacionUsuarios[22].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[8].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[23].edad} años, {informacionUsuarios[23].genero} | {informacionUsuarios[23].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[9].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[24].edad} años, {informacionUsuarios[24].genero} | {informacionUsuarios[24].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[10].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[25].edad} años, {informacionUsuarios[25].genero} | {informacionUsuarios[25].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[11].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[26].edad} años, {informacionUsuarios[26].genero} | {informacionUsuarios[26].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[12].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[27].edad} años, {informacionUsuarios[27].genero} | {informacionUsuarios[27].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[13].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[28].edad} años, {informacionUsuarios[28].genero} | {informacionUsuarios[28].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Carduser">
                            <div className="Frame-3607">
                                <div className="foto-Info">
                                    <img src={fotoperfil} alt="foto perfil" className="fotoPerfil"></img>
                                    <div>
                                        <span className="nombre-Usuario-Res">{informacionUsuarios[14].nombre}</span>
                                        <br />
                                        <span className="descr-Usuario-Res">{informacionUsuarios[29].edad} años, {informacionUsuarios[29].genero} | {informacionUsuarios[29].idiomas}</span>
                                    </div>
                                </div>

                                <div className="contenedor-Botones-Card">
                                    <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                        Ver perfil
                                    </span>
                                    </button>
                                    <button type="button" onClick={clickboton2} className="boton-Azul">
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[16].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[30].edad} años, {informacionUsuarios[30].genero} | {informacionUsuarios[30].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[17].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Carduser">
                    <div className="Frame-3607">
                        <span className="nombre-Usuario-Res">{informacionUsuarios[0].nombre}</span>
                        <span className="descr-Usuario-Res">{informacionUsuarios[15].edad} años, {informacionUsuarios[15].genero} | {informacionUsuarios[15].idiomas}</span>

                        <div className="contenedor-Botones-Card">
                            <button type="button" onClick={clickboton} className="boton-Blanco"><span className="Ver-perfil">
                                Ver perfil
                            </span>
                            </button>
                            <button type="button" onClick={clickboton2} className="boton-Azul">
                                <span className="Contacta">
                                Contacta
                                </span>
                            </button>
                        </div>
                    </div>
                </div> */}
                    </div>
                </div>
                <NavBar />
            </div>
        )
    }

}

export default ResultadoTest