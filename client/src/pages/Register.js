import React, { useState } from "react";
import axios from "axios";

function Register() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const enviarDatos = () => {
        let Usuario = {
            nombre,
            apellidos,
            email,
            dni,
            password,
            password2
        }

        axios.post("/registrar", Usuario).then((res) => {
            if (res.data === "insertOk") {
                alert("Usuario registrado correctamente")
            }
            if (res.data === "campoIncorrecto") {
                alert("Campo Incorrecto")
            }
            if (res.data === "userExiste") {
                alert("Este usuario ya existe")
            }

            
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
                    <input type="email" name="email" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Password (debe contener almenos una letra, símbolo y numero)</label>
                    <br />
                    <input type="password" name="password" placeholder="Ej: 123456Y+" onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Confirma Password</label>
                    <br />
                    <input type="password" name="password2" placeholder="Ej: 123456Y+" onChange={(e) => setPassword2(e.target.value)}></input>
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