import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Newslist.css';
import News from "./News"
import Search from "./Search"

function Newslist() {
  return  <>

  
      <Search/>
      <News/>



  </>
}

export default Newslist;