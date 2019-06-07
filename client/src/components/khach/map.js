import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class SimpleMap extends Component {
  
  render() 
  {
    return (
      <div>
        <Map google={this.props.google} style={{ height: '90vh', width: '100%' }} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
        <p>hihi</p>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBds-B7ea64oYuUxSMZRWsvjSgjyVkxtrA")
})(SimpleMap)