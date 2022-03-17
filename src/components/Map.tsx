import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';
import teslaData from "../data/news.json";

function Map() {
  const countries = teslaData
  const activeCountries = teslaData.filter(tesla => tesla.category === "Technology")
  const filteredCountries = teslaData.filter(tesla => tesla.address.country === "Germany")
  const activeFilteredCountries = teslaData.filter(tesla => (tesla.address.country === "Germany" && tesla.status == false ))

  return (
<MapContainer center={[51.505, -0.09]} zoom={4} maxZoom={3} maxBounds={ [[-90,-180],   [90,180]]  } bounceAtZoomLimits={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    noWrap={true}  minZoom={2}/>
  { activeCountries.map(tesla => (
  <Marker key={tesla.id} position={[tesla.gps.latitude, tesla.gps.longitude]}> 
  <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
    <div><h2>{tesla.name}</h2>
    <img className="newsImage" src={tesla.image}/>
    <p>{tesla.headline}</p>
    <p>{tesla.content}</p>
    </div>
  </Popup>
  </Marker>
  ))}



</MapContainer>
  );
}

export default Map;
