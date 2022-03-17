import React from "react";
import axios from "axios";


function Prueba() {


    const ejecutar = () => {

        let info = {
            id_usuario: 1023
        }

        axios.get("http://ec2-18-216-211-70.us-east-2.compute.amazonaws.com/api/recommend/users/update/1004").then((res) => {
            console.log(res.data)
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