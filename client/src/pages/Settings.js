import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Cookies from "universal-cookie";
import Modal from "react-bootstrap/Modal"

let cookie = new Cookies()



function Settings() {

    const [modalMod, setModalMod] = useState(false)

    const handleShowMod = () => setModalMod(true)
    const handleCloseMod = () => setModalMod(false)

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
                    <button type="button" className="Btn-Default-Perfil" onClick={handleShowMod}><span className="Texto-Blanco-Perfil">Modificar Perfil</span></button>
                    <Modal show={modalMod} onHide={handleCloseMod} backdrop='static' keyboard="False" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>¡Atención!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <span className="spanRegCol">Esta acción no tiene marcha atrás</span>
                            </div>
                            <div className="contenedor-Overlay-User">
                                <button type="button" className="Button-Overlay" onClick={irATest}>
                                    <span className="Texto-Overlay">Continuar</span></button>
                            </div>
                        </Modal.Body>
                    </Modal>
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