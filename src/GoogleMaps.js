import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import LaunchString, {latitude, longitude}  from "./LaunchString";

const mapStyles = {
  width: '50%',
  height: '50%'
  
};

export class MapContainer extends Component {
  
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
      render() {
        return (
          <div><LaunchString/>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
           

            initialCenter={
              {
                lat: {latitude},
                lng: {longitude}
              }
            }
            
         
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'Launch Site'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map></div>
        );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);