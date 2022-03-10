import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";
import Home from "../pages/Home";
import TestAfinidadUser from "../pages/TestAfinidadUser";
import FormBusqueda from "../pages/FormBusqueda";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterColiving from "../pages/RegisterColiving";
import Perfil from "../pages/Perfil";
import Colivings from "../pages/Colivings";

class Main extends Component {

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/testusuario" element={<TestAfinidadUser />} />
          <Route path="/registercoliving" element={<RegisterColiving />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/colivings" element={<Colivings />} />
          <Route path="/formbusqueda" element={<FormBusqueda/>} />
        </Routes>
      </div>
    );
  }
}

export default Main;
