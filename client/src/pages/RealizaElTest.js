import React, { useState } from "react";
import logonaranjo from "../img/logonaranjo.png";

function RealizaElTest() {

    const empezarTest = () => {
        window.location.href = "/testusuario"
    }

    return (
        <div className="empezarTest">
            <div>

                <img src={logonaranjo} className="logoNaranjo" alt="logo naranjo"></img>

            </div>
            <div className="responde-Preguntas">
                <span className="responde-Preguntas-Test">Para poder ayudarte a encontrar personas afines, responde a estas breves preguntas</span>
            </div>
            <div>
                <button type="button" className="Btn-Default-Login" onClick={empezarTest}><span className="Texto-Blanco-Login">
                    Empezar test
                </span></button>
            </div>
        </div>
    )
}

export default RealizaElTest