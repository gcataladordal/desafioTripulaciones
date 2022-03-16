import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const InfoUsuario = (props) => {


    const [infoUsuarios, setInfoUsuarios] = useState("");

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
            setInfoUsuarios(informacionUsuarios)
        } else {
            let infoCompatiblesDb = await axios.get("/infocompatibledb", {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (infoCompatiblesDb.data[0] === undefined) {

                setInfoUsuarios("noTest")
            } else {

                let infoCompatibles = await axios.get(`${props}`, {
                    headers: { infoUsers: infoCompatiblesDb.data[0].ids_compatibles }
                })


                let informacionUsuarios = infoCompatibles.data.flat(2)
                setInfoUsuarios(informacionUsuarios)
            }


        }
    }


    return [infoUsuarios]
}

export default InfoUsuario;



