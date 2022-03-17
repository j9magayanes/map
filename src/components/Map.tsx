import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';
import teslaData from "../data/tesla-sites.json";

function Map() {
  const filteredStations = teslaData.filter(tesla => tesla.address.country === "Italy")

  return (
<MapContainer center={[51.505, -0.09]} zoom={2} maxZoom={3} maxBounds={ [[-90,-180],   [90,180]]  } bounceAtZoomLimits={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    noWrap={true}  minZoom={2}/>
  { filteredStations.map(tesla => (
  <Marker key={tesla.id} position={[tesla.gps.latitude, tesla.gps.longitude]}> 
  <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
    <div><h2>{"Location " + tesla.name}</h2>
    <p>Headline:</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </Popup>
  </Marker>
  ))}



</MapContainer>
  );
}

export default Map;
