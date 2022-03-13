import React, { useEffect, useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie";
import InfoAuth from "../hooks/InfoAuth";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const [usuario] = InfoAuth("obtieneinfo")
    
    
    useEffect(() => {
        if (usuario != "") {
            if (usuario.data.auth) {
                navigate("/home")
            }
        }
    }, [usuario])


    const enviarDatosLogin = () => {

        let Usuario = {
            email,
            password
        }

        axios.post("/loguear", Usuario).then((res) => {
            const {message, token, status} = res.data;
            alert(message)

            if (status) {
                cookies.set("token", token);
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
                    <input type="password" placeholder="Ej: 123456Y+" autoComplete="off" onChange={(e) => setPassword(e.target.value)}></input>
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