import React, { useState } from "react";
import axios from "axios";


function RegisterUser() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [cp, setCP] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const [alertPassword, setAlertPassword] = useState(false);
    const [alertEmail, setAlertEmail] = useState(false);
    const [alertOtro, setAlertOtro] = useState(false);
    const [alertUserExiste, setAlertUserExiste] = useState(false);

    const enviarDatos = () => {
        let Usuario = {
            nombre,
            apellidos,
            direccion,
            ciudad,
            cp,
            telefono,
            email,
            password,
            password2,
        }

        axios.post("/registrarusuario", Usuario).then((res) => {
            setAlertEmail(false)
            setAlertPassword(false)
            setAlertOtro(false)
            setAlertUserExiste(false)
            if (res.data === "insertOk") {
                window.location.href = "/login"
            }
            if (res.data === "algoMal") {
                setAlertOtro(true)
            }
            if (res.data === "userExiste") {
                setAlertUserExiste(true)
            }
            if (res.data === "passwordMal") {
                setAlertPassword(true)
            }
            if (res.data === "emailMal") {
                setAlertEmail(true)
            }
            if (res.data === "passwordEmailMal") {
                setAlertEmail(true)
                setAlertPassword(true)
            }
            

        })
    }


    return (
        <div>
            <div className="Registro">
                <span className="Crea-tu-cuenta">
                    Crea tu cuenta
                </span>
                <br /><br />
                <form>

                    <span className="spanRegister">
                        Nombre
                    </span>
                    <br />

                    <input type="text" name="nombre" className="inputRegistro" placeholder="Ej: Felipe" onChange={(e) => setNombre(e.target.value)}>
                    </input>
                    <br />

                    <span className="spanRegister">
                        Apellidos
                    </span>
                    <br />
                    <input type="text" name="apellidos" className="inputRegistro" placeholder="Ej: Sanchez Fernandez" onChange={(e) => setApellidos(e.target.value)}></input>
                    <br />
                    <span className="spanRegister">
                        Ciudad
                    </span>
                    <br />
                    <input type="text" name="ciudad" className="inputRegistro" placeholder="Ej: Madrid" onChange={(e) => setCiudad(e.target.value)}></input>
                    <br />
                    <span className="spanRegister">
                        Dirección
                    </span>
                    <br />
                    <input type="text" name="direccion" className="inputRegistro" placeholder="Ej: Calle Paco de Lucia nº5" onChange={(e) => setDireccion(e.target.value)}></input>
                    <br />
                    <span className="spanRegister">
                        Código Postal
                    </span>
                    <br />
                    <input type="text" name="cp" className="inputRegistro" placeholder="Ej: 06432" onChange={(e) => setCP(e.target.value)}></input>
                    <br />
                    <span className="spanRegister">
                        Teléfono
                    </span>
                    <br />
                    <input type="text" name="telefono" className="inputRegistro" placeholder="559 577 837" onChange={(e) => setTelefono(e.target.value)}></input>
                    <br />
                    <span className="spanRegister">
                        Email
                    </span>
                    <br />
                    <input type="email" name="email" className="inputRegistro" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    {alertEmail ? (<span className="alert-Register">El correo debe tener un formato correcto</span>): ""}
                    <br />
                    <span className="spanRegister">
                        Contraseña (mínimo una letra, un símbolo y un número)
                    </span>

                    <br />
                    <input type="password" placeholder="Ej: 123456Y+" className="inputRegistro" autoComplete="off" onChange={(e) => setPassword(e.target.value)}></input>
                    {alertPassword ? (<span className="alert-Register">Comprueba los requisitos y que las contraseñas coincidan</span>): ""}
                    <br />
                    <span className="spanRegister">
                        Repetir contraseña
                    </span>

                    <br />
                    <input type="password" placeholder="Ej: 123456Y+" className="inputRegistro" autoComplete="off" onChange={(e) => setPassword2(e.target.value)}></input>
                    {alertPassword ? (<span className="alert-Register">Comprueba los requisitos y que las contraseñas coincidan</span>): ""}
                    <br />

                    {alertUserExiste ? (<span className="alert-Register">Este correo ya está registrado</span>): ""}
                    {alertOtro ? (<span className="alert-Register">Comprueba el formato de tus datos personales y de dirección</span>): ""}
                    <button type="button" className="Btn-Default" variant="primary" onClick={enviarDatos}><span className="Texto-Blanco">
                        Registrarme
                    </span></button>
                    <br />
                </form>

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
                <div className="Ya-tienes-una-cuentaInicia-sesin">
                    <span className="Ya-tienes-una-cuentaInicia-sesin">
                        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                    </span>
                </div>
                <br />



            </div>
        </div>
    )
}

export default RegisterUser