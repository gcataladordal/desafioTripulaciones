import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const InfoAuth = (props) => {

    const [infoUser, setInfoUser] = useState("");

    useEffect(() => {
        consultarBack(props)
    }, []);

    const consultarBack = async (props) => {

        let token = cookies.get("token");

        const obtenerInfo = await axios.get(`${props}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        setInfoUser(obtenerInfo);
    }


    return [infoUser]
}

export default InfoAuth;