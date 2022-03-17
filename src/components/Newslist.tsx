import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Newslist.css';
import News from "./News"
import Search from "./Search"

function Newslist() {
  return  <>

      <h1>Newslist</h1>
      <Search/>
      <News/>
      <News/>
      <News/>


  </>
}

export default Newslist;