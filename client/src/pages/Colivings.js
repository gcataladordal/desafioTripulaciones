import React, { Component } from "react";
import { MapContainer, TileLayer } from 'react-leaflet'


class Colivings extends Component {


    render() {
        return (
            <div id="map">
                <MapContainer center={[40.4169473, -3.7057172]} zoom={6}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        );
    }
}
export default Colivings;