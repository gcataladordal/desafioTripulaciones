import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const InfoUsuario = (props) => {


    const [dataPerfil, setDataPerfil] = useState("");

    let infoRecomendados = JSON.parse(sessionStorage.getItem("infoRecom"))

    let token = cookies.get("token");

    useEffect(() => {
        obtenerInformacion(props)
    }, []);

    async function obtenerInformacion(props) {


        if (infoRecomendados) {
            let infoCompatibles = await axios.get(`${props}`, {
                headers: { infoUsers: infoRecomendados.ids_compatibles }
            })
            console.log((infoCompatibles))

            let informacionUsuarios = infoCompatibles.data.flat(2)
            setDataPerfil(informacionUsuarios)
        } else {
            let infoCompatiblesDb = await axios.get("/infocompatibledb", {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (infoCompatiblesDb.data[0] === undefined) {

                setDataPerfil("noTest")
            } else {

                let infoCompatibles = await axios.get(`${props}`, {
                    headers: { infoUsers: infoCompatiblesDb.data[0].ids_compatibles }
                })


                let informacionUsuarios = infoCompatibles.data.flat(2)
                setDataPerfil(informacionUsuarios)
            }


        }
    }


    return [dataPerfil]
}

export default InfoUsuario;


