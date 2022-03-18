import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




function SearchBar(){
  const [category,setCategory] = useState();

  function handleSelectChange(event: { target: { value: any; }; }) {
  setCategory(event.target.value);
}
console.log(category);
    return (
      <select value={category} onChange={handleSelectChange}> 
      <option value="all">All Category</option>
      <option value="politics">Politics</option>
      <option value="business">Business</option>
  </select>
 
    )
  }

export default SearchBar;