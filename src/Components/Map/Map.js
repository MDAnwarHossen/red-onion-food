import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const API_KEY = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_API_KEY}`
const containerStyle = {
  width: '100%',
  height: '60vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
const onLoad = marker => {
    
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey= {API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      onLoad={onLoad}
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)