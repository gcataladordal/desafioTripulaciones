import React from "react";
import axios from "axios";


function Prueba() {


    const ejecutar = () => {

        let info = {
            id_usuario: 1023
        }

        axios.post("/prueba", info).then((res) => {
            console.log("23" + res.data)
        })
    }

    return (

        <div>
            <p>Hola, soy el resultado User</p>
            <button type="button" onClick={ejecutar}>PRUEBA</button>
        </div>
    )

}

export default Prueba