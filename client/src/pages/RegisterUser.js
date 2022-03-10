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
                    <label>Ciudad</label>
                    <br />
                    <input type="text" name="ciudad" placeholder="Ej: Madrid" onChange={(e) => setCiudad(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Direccion</label>
                    <br />
                    <input type="text" name="direccion" placeholder="Ej: Calle Paco de Lucia nº5" onChange={(e) => setDireccion(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Código Postal</label>
                    <br />
                    <input type="text" name="cp" placeholder="Ej: 06432" onChange={(e) => setCP(e.target.value)}></input>
                    <br />
                    <br />
                    <br /><label>Teléfono</label>
                    <br />
                    <input type="text" name="telefono" placeholder="559 577 837" onChange={(e) => setTelefono(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Password (debe contener almenos una letra, un símbolo y un numero)</label>
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

export default RegisterUser