import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';
import newsData from "../data/news.json";
import { useSelector, useStore } from 'react-redux';

function Map() {

  const store = useStore();
  const state = useState();
  const category = useSelector(() => store.getState().category);

  const categories = newsData
  const activeCategories = newsData.filter(news => news.category === category)
  const filteredCountries = newsData.filter(news => news.address.country === "Germany")
  const activeFilteredCountries = newsData.filter(news => (news.address.country === "Germany" && news.status == false ))

  return (
<MapContainer center={[51.505, -0.09]} zoom={4} maxZoom={3} maxBounds={ [[-90,-180],   [90,180]]  } bounceAtZoomLimits={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    noWrap={true}  minZoom={2}/>
  { activeCategories.map(news => (
  <Marker key={news.id} position={[news.gps.latitude, news.gps.longitude]} eventHandlers={{
    click: () => {
    },
  }} > 
  </Marker>
  ))}


</MapContainer>
  );
}

export default Map;
