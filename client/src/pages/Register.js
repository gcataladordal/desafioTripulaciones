import React, { useState } from "react";
import axios from "axios";

function Register() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");

    const enviarDatos = () => {
        let Usuario = {
            nombre,
            apellidos,
            email,
            dni,
            password
        }

        axios.post("/register", Usuario).then((res) => {
            console.log(res.data)
        })
    }


    return (
        <div>
            <br />
            <br />
            <form>
                <div>
                    <label>Nombre</label>
                    <br />
                    <input type="text" name="nombre" placeholder="Ej: Felipe" onChange={(e) => setNombre(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Apellidos</label>
                    <br />
                    <input type="text" name="apellidos" placeholder="Ej: Sanchez Fernandez" onChange={(e) => setApellidos(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Dni</label>
                    <br />
                    <input type="text" name="dni" placeholder="Ej: 12345678X" onChange={(e) => setDni(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="text" name="email" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Password (debe contener almenos una letra, símbolo y numero)</label>
                    <br />
                    <input type="password" name="password" placeholder="Ej: 123456Y+" onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <br />
                    <br />
                    <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={enviarDatos}>Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default Register