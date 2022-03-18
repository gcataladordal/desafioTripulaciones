import React, { useState, useEffect } from "react";
import InfoUsuario from "../hooks/InfoUsuario";
import NavBar from "../components/NavBar";
import logonaranjo from "../img/logonaranjo.png";
import fotoperfil from "../img/perfil.png";
import InfoAuth from "../hooks/InfoAuth";
import Modal from "react-bootstrap/Modal"
function ResultadoTest() {


    const [usuario, auth] = InfoAuth("obtieneinfo")
    const [informacionUsuarios] = InfoUsuario("busquserscomp");
    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [modalUser1, setModalUser1] = useState(false)
    const [modalUser2, setModalUser2] = useState(false)
    const [modalUser3, setModalUser3] = useState(false)
    const [modalUser4, setModalUser4] = useState(false)
    const [modalUser5, setModalUser5] = useState(false)
    const [modalUser6, setModalUser6] = useState(false)
    const [modalUser7, setModalUser7] = useState(false)
    const [modalUser8, setModalUser8] = useState(false)
    const [modalUser9, setModalUser9] = useState(false)
    const [modalUser10, setModalUser10] = useState(false)
    const [modalUser11, setModalUser11] = useState(false)
    const [modalUser12, setModalUser12] = useState(false)
    const [modalUser13, setModalUser13] = useState(false)
    const [modalUser14, setModalUser14] = useState(false)
    const [modalUser15, setModalUser15] = useState(false)


    const handleShowUser1 = () => setModalUser1(true)
    const handleCloseUser1 = () => setModalUser1(false)
    const handleShowUser2 = () => setModalUser2(true)
    const handleCloseUser2 = () => setModalUser2(false)
    const handleShowUser3 = () => setModalUser3(true)
    const handleCloseUser3 = () => setModalUser3(false)
    const handleShowUser4 = () => setModalUser4(true)
    const handleCloseUser4 = () => setModalUser4(false)
    const handleShowUser5 = () => setModalUser5(true)
    const handleCloseUser5 = () => setModalUser5(false)
    const handleShowUser6 = () => setModalUser6(true)
    const handleCloseUser6 = () => setModalUser6(false)
    const handleShowUser7 = () => setModalUser7(true)
    const handleCloseUser7 = () => setModalUser7(false)
    const handleShowUser8 = () => setModalUser8(true)
    const handleCloseUser8 = () => setModalUser8(false)
    const handleShowUser9 = () => setModalUser9(true)
    const handleCloseUser9 = () => setModalUser9(false)
    const handleShowUser10 = () => setModalUser10(true)
    const handleCloseUser10 = () => setModalUser10(false)
    const handleShowUser11 = () => setModalUser11(true)
    const handleCloseUser11 = () => setModalUser11(false)
    const handleShowUser12 = () => setModalUser12(true)
    const handleCloseUser12 = () => setModalUser12(false)
    const handleShowUser13 = () => setModalUser13(true)
    const handleCloseUser13 = () => setModalUser13(false)
    const handleShowUser14 = () => setModalUser14(true)
    const handleCloseUser14 = () => setModalUser14(false)
    const handleShowUser15 = () => setModalUser15(true)
    const handleCloseUser15 = () => setModalUser15(false)



    useEffect(() => {
        if (auth === true && typeof (informacionUsuarios) === "object" && typeof (usuario) !== "string") {
            setLoaded(true)
            setLoading(false)
        } else if (auth === false) {
            window.location.href = "/registro"
        }
    }, [informacionUsuarios, usuario])



    if (loading) {
        return (
            <div className="Splash-screen">

                <img src={logonaranjo} className="logoNaranjo" alt="logo naranjo"></img>

            </div>
        )
    }


    const clickboton = () => {
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser1}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser1} onHide={handleCloseUser1} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[0].nombre} | {informacionUsuarios[15].edad} años, {informacionUsuarios[15].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser1(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser2}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser2} onHide={handleCloseUser2} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[1].nombre} | {informacionUsuarios[16].edad} años, {informacionUsuarios[16].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser2(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser3}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser3} onHide={handleCloseUser3} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[2].nombre} | {informacionUsuarios[17].edad} años, {informacionUsuarios[17].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser3(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser4}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser4} onHide={handleCloseUser4} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[3].nombre} | {informacionUsuarios[18].edad} años, {informacionUsuarios[18].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser4(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser5}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser5} onHide={handleCloseUser5} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[4].nombre} | {informacionUsuarios[19].edad} años, {informacionUsuarios[19].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser5(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser6}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser6} onHide={handleCloseUser6} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[5].nombre} | {informacionUsuarios[20].edad} años, {informacionUsuarios[20].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser6(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser7}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser7} onHide={handleCloseUser7} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[6].nombre} | {informacionUsuarios[21].edad} años, {informacionUsuarios[21].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser7(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser8}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser8} onHide={handleCloseUser8} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[7].nombre} | {informacionUsuarios[22].edad} años, {informacionUsuarios[22].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser8(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser9}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser9} onHide={handleCloseUser9} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[8].nombre} | {informacionUsuarios[23].edad} años, {informacionUsuarios[23].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser9(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser10}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser10} onHide={handleCloseUser10} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[9].nombre} | {informacionUsuarios[24].edad} años, {informacionUsuarios[24].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser10(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser11}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser11} onHide={handleCloseUser11} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[10].nombre} | {informacionUsuarios[25].edad} años, {informacionUsuarios[25].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser11(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser12}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser12} onHide={handleCloseUser12} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[11].nombre} | {informacionUsuarios[26].edad} años, {informacionUsuarios[26].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser12(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser13}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser13} onHide={handleCloseUser13} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[12].nombre} | {informacionUsuarios[27].edad} años, {informacionUsuarios[27].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser13(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser14}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser14} onHide={handleCloseUser14} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[13].nombre} | {informacionUsuarios[28].edad} años, {informacionUsuarios[28].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser14(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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
                                    <button type="button" className="boton-Azul" onClick={handleShowUser15}>
                                        <span className="Contacta">
                                            Contacta
                                        </span>
                                    </button>
                                    <Modal show={modalUser15} onHide={handleCloseUser15} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{informacionUsuarios[14].nombre} | {informacionUsuarios[29].edad} años, {informacionUsuarios[29].idiomas[0]}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <input type="text" className="inputRegistro"></input>
                                            </div>
                                            <div className="contenedor-Overlay-User">
                                                <button type="button" className="Button-Overlay" onClick={() => setModalUser15(false)}>
                                                <span className="Texto-Overlay">Contactar</span></button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar />
            </div>
        )
    }

}

export default ResultadoTest