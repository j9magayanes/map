import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import { Grid } from '@material-ui/core';
import SearchBar from "./SearchBar";

function Header(){
    return (
     <Grid container className="background">
        <Grid >
        <img className="logo" src={"data:image/png;base64,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"}></img>
        </Grid>
        <Grid item xs={9} >
        <h1 className="header">Globe News</h1>
        </Grid>
        <Grid item xs={2} >
          <SearchBar/>
        </Grid>
        </Grid>
        )
  }

export default Header;