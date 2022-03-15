import React, { useEffect, useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie";
import InfoAuth from "../hooks/InfoAuth";

const cookies = new Cookies();

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [usuario, auth] = InfoAuth("obtieneinfo")

    useEffect(() => {
        if (auth === true) {
            window.location.href = "/realizaeltest"
            console.log("logueado")
        }
    }, [auth])


    const enviarDatosLogin = () => {

        let User = {
            email,
            password
        }

        axios.post("/loguear", User).then((res) => {
            const { message, token, status } = res.data;
            alert(message)

            if (status) {
                cookies.set("token", token);
                window.location.reload()
            } else {

            }


        })
    }

    return (
        <div className="Log-in">
            <span className="Bienvenido">
                ¡Bienvenido!
            </span>
            <br />
            <br />
            <form>
                <span className="spanRegister">
                    E-mail
                </span>
                <br />
                <input type="email" name="email" className="inputRegistro" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                
                <label>Password</label>
                <br />
                <input type="password" placeholder="Ej: 123456Y+" className="inputRegistro" autoComplete="off" onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <br />
                
                <button type="button" className="Btn-Default-Login" onClick={enviarDatosLogin}><span class="Texto-Blanco-Login">
  Iniciar sesión
</span></button>

            </form>
            <br />
            <div className="contenedor-Lineas">
                <div className="Line-5"></div>

                <span className="o">
                    o
                </span>
                <div className="Line-6">
                </div>
            </div>


            <div className="botn">

                <div className="Btn-Default-Other">
                    <span className="Texto-Negro-Google">
                        Google
                    </span>
                </div>
            </div>
            <div className="Btn-Default-Other">
                <span className="Texto-Negro-Facebook">
                    Facebook
                </span>
            </div>
            <br />
            <div class="Ya-tienes-una-cuentaInicia-sesin">
                <span class="Ya-tienes-una-cuentaInicia-sesin">
                    ¿No tienes cuenta? <a href="/register">Regístrate</a>
                </span>
            </div>
            <br />

        </div>
    )
}

export default Login