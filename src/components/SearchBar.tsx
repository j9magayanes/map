import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';


function SearchBar(){
    return (
  

          <select className="searchbar">
          <option>All Category</option>
          <option>Politics</option>
      </select>
 
    )
  }

export default SearchBar;