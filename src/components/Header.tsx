import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Header.css";
import { Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";
import Logo from "../assets/images/upday_logo_blue.png";

function Header() {
  return (
    <Grid container className="background">
      <Grid>
        <img className="logo" src={Logo}></img>
      </Grid>
      <Grid item xs={9}>
        <h1 className="header">Globe News</h1>
      </Grid>
      <Grid item xs={2}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default Header;
