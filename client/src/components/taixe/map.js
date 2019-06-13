import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import mark from './mark.png'
import './map.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine/dist/leaflet.routing.icons.png'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import axios from 'axios';

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
            // data_pos: null,
            // distance: '0',
            // time: '0'
            x:10.762924,
            y:106.6827
        }
    }
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        }); 
    }
    onClick=()=>{
        this.setState({
            pos:{
                x: this.state.x,
                y: this.state.y
            }
        })
        axios.post('http://localhost:8080/taixeguitoado',{
            x: this.state.pos.x,
            y: this.state.pos.y,
            id: localStorage.getItem('tokentaixe'),
            status: true
        })
        // .then((kq)=>{
            
        // })

    }

    // vitrihientai = () => {
    //     navigator.geolocation.watchPosition((pos) => {
    //         this.setState({
    //             pos: { x: pos.coords.latitude, y: pos.coords.longitude },
    //         });
    //     });
    // }
    // send_pos = () => {
    //     var data_send = [document.getElementById('pos_x').value, document.getElementById('pos_y').value]
    //     this.socket.emit('client_send_pos', data_send);
    // }
    // componentDidMount() {
    //     const map = this.leafletMap.leafletElement
    //     var x = L.Routing.control({
    //         waypoints: [
    //             L.latLng(10.76237, 106.68170),
    //             L.latLng(10.77257, 106.69802)
    //         ],
    //         routeWhileDragging: true,
    //         geocoder: L.Control.Geocoder.nominatim(),
    //         createMarker: function (i, wp) {
    //             return L.marker(wp.latLng, {
    //                 draggable: true,
    //                 icon: markicon
    //             }).addTo(map);
    //         }

    //     }).addTo(map);
    //     x.on('routesfound', (e) => {
    //         var routes = e.routes;
    //         var a = routes[0].summary.totalDistance
    //         var tg = routes[0].summary.totalTime
    //         tg = Math.round(tg / 60)
    //         a = Math.round(a / 1000)
    //         this.setState({
    //             distance: a,
    //             time: tg
    //         })
    //     }).addTo(map)
    // }
    render() {
        const position = [this.state.pos.x, this.state.pos.y]
        // const position = [10.762924, 106.6827]
        return (
            <div>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-lg-2 mt-2">
                            <p>Nhập vị trí của bạn</p>
                        </div>
                        <div className="col-lg-2 mt-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="x" id="x" placeholder="Toạ độ x"  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-lg-2 mt-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="y" id="y" placeholder="Toạ độ y" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-lg-1 mt-3">
                            <button name="" id="" className="btn btn-primary" onClick={this.onClick}>OK</button>
                        </div>
                    </div>
                </div>
                <Map className="map" center={position} zoom={16} ref={map => { this.leafletMap = map; }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy;  contributors"

                    />
                    <Marker position={position} icon={markicon}>
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