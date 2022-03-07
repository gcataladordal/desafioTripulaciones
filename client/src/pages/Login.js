import React, { useState } from "react";
import axios from "axios"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const enviarDatosLogin = () => {

        let Usuario = {
            email,
            password
        }

        axios.post("/loguear", Usuario).then((res) => {
            if (res.data === "logueadoAdmin") {
                alert("Usuario logueado y es admin")
            }
            if (res.data === "logueadoNoAdmin") {
                alert("Usuario logueado y NO es admin")
            }
            if (res.data === "passwordMal") {
                alert("password mal")
            }

            
        })
    }

    return (
        <div> 
            <form>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" placeholder="Ej: 123456Y+" onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <br />
                    <br />
                    <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={enviarDatosLogin}>Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default Login