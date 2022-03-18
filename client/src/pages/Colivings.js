import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import NavBar from "../components/NavBar";


const colivingsData = require("../coliving.json")

class Colivings extends Component {


    render() {
        return (
            <div>
                <div className="Pagina-Colivings">
                    <div>
                        <span className="Bienvenido">Colivings en España</span>
                    </div>
                    <div className="expl-Mapa">
                        <span className="spanRegCol">Puedes moverte por el mapa para ver la información de los Colivings</span>
                    </div>
                    <div id="map">
                        <MapContainer center={[40.4169473, -3.7057172]} zoom={6}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {colivingsData.map((object, i) =>
                                <Marker key={i} position={[object.latitud, object.longitud]}>
                                    <Popup>
                                        <b>{object.nombre}</b><br />
                                        {object.ciudad}<br />
                                        {object.provincia}<br />
                                        ID del Coliving: {object.ID}
                                    </Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    </div>
                </div>
                <NavBar />
            </div>
        );
    }
}
export default Colivings;