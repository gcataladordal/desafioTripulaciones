import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const colivingsData = require("../coliving.json")

class Colivings extends Component {


    render() {
        return (
            <div className="Pagina-Colivings">
                <div>
                    <span className="Bienvenido">Colivings en España</span>
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
        );
    }
}
export default Colivings;