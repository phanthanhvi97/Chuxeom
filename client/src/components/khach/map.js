import React, { Component } from 'react'
import io from 'socket.io-client/dist/socket.io'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import mark from './mark.png'
import './map.css'

import 'leaflet-routing-machine/dist/leaflet-routing-machine.js'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine/dist/leaflet.routing.icons.png'

import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
// import 'leaflet-control-geocoder/src/geocoders/nominatim.js'
var markicon = L.icon({
    iconUrl: mark,
    iconSize: [26, 40]
})
export default class BanDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pos: {
                x: 10.762924,
                y: 106.6827,
            },
            data_pos: null
        }
        this.socket = io('http://localhost:8080/', { jsonp: false })
        this.socket.on('server_send_pos', (data) => {
            this.setState({
                data_pos: data
            })
        })
    }
    send_pos = () => {
        var data_send = [document.getElementById('pos_x').value, document.getElementById('pos_y').value]
        this.socket.emit('client_send_pos', data_send);
    }
    componentDidMount() {
        const map = this.leafletMap.leafletElement
        L.Routing.control({
            waypoints: [
                L.latLng(10.76237, 106.68170),
                L.latLng(10.77257, 106.69802)
            ],
            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim()
        }).addTo(map);
        // L.Control.geocoder().addTo(map)
    }
    render() {
        const position = [this.state.pos.x, this.state.pos.y]
        // const position = [10.762924, 106.6827]

        return (
            <div>
                <div>
                    <p>{position}</p>
                    {/* <div className="form-group"> */}
                        {/* <div className="row"> */}
                            {/* <div className="col-lg-2"> */}
                                {/* <input type="text" */}
                                    {/* className="form-control" name="x" id="pos_x" required placeholder="Toa do x" /> */}
                            {/* </div> */}
                            {/* <div className="col-lg-2"> */}
                                {/* <input type="text" */}
                                    {/* className="form-control" name="y" id="pos_y" required placeholder="Toa do y" /> */}
                            {/* </div> */}
                            {/* eslint-disable-next-line */}
                            {/* <a className="btn btn-primary" role="button" onClick={this.send_pos}>Select</a> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <Map className="map" center={position} zoom={16} ref={map => { this.leafletMap = map; }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy;  contributors"
                        
                    />
                    <Marker  position={position} icon={markicon}>
                                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                                </Marker>
                    {/* {this.state.data_pos !== null ?
                        (this.state.data_pos).map((data, i) => {
                            return (
                                <Marker key={i} position={data} icon={markicon}>
                                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                                </Marker>
                            )
                        })
                        : ''
                    } */}
                </Map>
            </div>
        )
    }
}