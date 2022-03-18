import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoAuth from "../hooks/InfoAuth";


function Pasarela() {

    const [usuario, auth] = InfoAuth("obtieneinfo")

    useEffect(() => {
        if (auth === true) {
            
            let id_usuario = usuario.id_usuario
            obtenerData(id_usuario)
        } else {
        }
    }, [auth]);

    const obtenerData = async (id_usuario) => {

        let obtenerInfo = await axios.get(`http://ec2-18-216-211-70.us-east-2.compute.amazonaws.com/api/recommend/users/update/${id_usuario}`)

    };


    return (

        <div>
            <p>Hola, soy el resultado User</p>
        </div>
    )
}


export default Pasarela