import React, { Component } from 'react'
// import io from 'socket.io-client/dist/socket.io'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import mark from './mark.png'
import './map.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine/dist/leaflet.routing.icons.png'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'

import {connect} from 'react-redux'

var markicon = L.icon({
    iconUrl: mark,
    iconSize: [26, 40]
})
 class BanDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: {
                x: 10.77257,
                y: 106.69802,
            },
            data_pos: null,
            distance: '0',
            time: '0'
        }
        // this.socket = io('http://localhost:8080/', { jsonp: false })
        // this.socket.on('server_send_pos', (data) => {
        //     this.setState({
        //         data_pos: data
        //     })
        // })
        // this.vitrihientai=this.vitrihientai.bind(this)
    }
    vitrihientai() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({
            pos: { x: pos.coords.latitude, y: pos.coords.longitude },
            });
        });
        // this.setState({
        //     pos: {
        //         x: 10.32423423,
        //         y: 106.2343242
        //     }
        // })
    }
    
    // send_pos = () => {
    //     var data_send = [document.getElementById('pos_x').value, document.getElementById('pos_y').value]
    //     this.socket.emit('client_send_pos', data_send);
    // }
    componentDidMount() {
        const map = this.leafletMap.leafletElement
        var x = L.Routing.control({
            waypoints: [
                L.latLng(this.state.pos.x, this.state.pos.y),
                L.latLng(10.763049, 106.682124)
            ],
            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim(),
            createMarker: function (i, wp) {
                return L.marker(wp.latLng, {
                    draggable: true,
                    icon: markicon
                }).addTo(map);
            }
        }).addTo(map);
        x.on('routesfound', (e) => {
            var routes = e.routes;
            var a = routes[0].summary.totalDistance
            var tg = routes[0].summary.totalTime
            // console.log(routes)
            tg = Math.ceil(tg / 60)
            a = Math.ceil(a / 1000)
            this.setState({
                distance: a,
                time: tg
            })

            //dia chi di
            var quangduong=routes[0].name
            localStorage.setItem('quangduong', quangduong)

            //lay ra toa do bat dau
            // console.log(routes)
            var xbd=routes[0].waypoints[0].latLng.lat
            var ybd=routes[0].waypoints[0].latLng.lng

            // var bd=[xbd,ybd]
            // console.log(bd)
            var xkt=routes[0].waypoints[1].latLng.lat
            var ykt=routes[0].waypoints[1].latLng.lng

            // var kt=[xkt, ykt]

            localStorage.setItem('xbd',xbd)
            localStorage.setItem('ybd',ybd)

            localStorage.setItem('xkt',xkt)
            localStorage.setItem('ykt',ykt)


            var {dispatch} = this.props
            dispatch({type:"CHANGE",item:a})
            // dispatch({type:"vivuive",item:a})

        }).addTo(map)
    }
    render() {
        const position = [this.state.pos.x, this.state.pos.y]
        // const position=[10.77257, 106.69802]
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() => this.vitrihientai()}>Lấy vị trí hiện tại</button>
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
export default connect(state =>{
    return {temp:state.temp}
})(BanDo)
