import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const InfoAuth = (props) => {

    const [infoUser, setInfoUser] = useState("");
    const [auth, setAuth] = useState("");

    useEffect(() => {
        consultarBack(props)
    }, []);

    const consultarBack = async (props) => {

        let token = cookies.get("token");

        if (token) {

            const obtenerInfo = await axios.get(`${props}`, {
            headers: { Authorization: `Bearer ${token}` },
            });

            if (obtenerInfo.data.auth == true) {
                setInfoUser(obtenerInfo);
                setAuth(true)
            } else {
                setAuth(false)
            }
        
        }else {
            let data = {auth: false}
            setInfoUser(data);
            setAuth(false)

        }
        
        
        
    }


    return [infoUser, auth]
}

export default InfoAuth;