
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const InfoPerfil = (props) => {


    const [infoUsuarios, setInfoUsuarios] = useState("");

    let token = cookies.get("token");

    useEffect(() => {
        obtenerInformacion(props)
    }, []);

    async function obtenerInformacion(props) {


        let dataUser = await axios.get(`${props}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(dataUser)
        setInfoUsuarios(dataUser)
    }
    return [infoUsuarios]
}

export default InfoPerfil;
