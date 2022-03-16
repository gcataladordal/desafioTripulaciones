import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";
import Home from "../pages/Home";
import TestAfinidadUser from "../pages/TestAfinidadUser";
import BusquedaColiving from "../pages/BusquedaColiving";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterColiving from "../pages/RegisterColiving";
import Perfil from "../pages/Perfil";
import Colivings from "../pages/Colivings";
import BusquedaUsuario from "../pages/BusquedaUsuario";
import ResultadoBusqUsuario from "../pages/ResultadoBusqUsuario";
import ResultadoBusqColiving from "../pages/ResultadoBusqColiving";
import RealizaElTest from "../pages/RealizaElTest";
import ResultadoTest from "../pages/ResultadoTest";
import HomeLogueado from "../pages/HomeLogueado";
import Prueba from "../pages/Prueba";
import Pasarela from "../pages/PasarelaTest";

class Main extends Component {

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegisterUser />} />
          <Route path="/testusuario" element={<TestAfinidadUser />} />
          <Route path="/registercoliving" element={<RegisterColiving />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/colivings" element={<Colivings />} />
          <Route path="/buscacoliving" element={<BusquedaColiving/>} />
          <Route path="/buscausuario" element={<BusquedaUsuario/>} />
          <Route path="/resultadobusquedauser" element={<ResultadoBusqUsuario/>} />
          <Route path="/resultadobusquedacoliving" element={<ResultadoBusqColiving/>} />
          <Route path="/realizaeltest" element={<RealizaElTest />} />
          <Route path="/resultadotest" element={<ResultadoTest />} />
          <Route path="/homelogueado" element={<HomeLogueado /> } />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/cargandoresultado" element={<Pasarela />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
