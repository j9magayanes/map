import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';


function Search(_props: any){
    return (
  
      _props.country ?  <div className="search">NEWS in {_props.country} </div> : null 
    )
  }

export default Search;