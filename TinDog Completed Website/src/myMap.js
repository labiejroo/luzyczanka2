import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
    return (
      <Map 
          google={this.props.google} 
          initialCenter={{
            lat: 42.39,
            lng: -72.52
                         }}  >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBB5v-3LEJG02PxLP5AtszAqSoCcjoS6EA")
  })(Map)   
