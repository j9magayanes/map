import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "./components/Map";
import Newslist from "./components/Newslist";
import Header from "./components/Header";
import Screen from "./components/Screen";
import './App.css';
import { Grid } from '@material-ui/core';


function App() {
  return (
  <div>
  <Header/>
  <Grid container>
        <Grid item xs={3} >
        <Newslist />
        </Grid>
        <Grid item xs={9} >
        <Map />
        </Grid>
      </Grid>
      <div className="rows" >
        
 
   
  


    </div>
  </div>
  )
}

export default App;
