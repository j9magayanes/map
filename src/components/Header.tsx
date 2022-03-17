import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import { Grid } from '@material-ui/core';

function Header(){
    return (
     <Grid container className="background">
        <Grid >
        <img className="logo" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAOVBMVEVGdoBCdH5iiJA/cnxbg4xvkJiHoqhjiZGBnaQ8cHt4l55zk5tDdH+Zr7STq7B+m6KtvsKMpauesrfvqjAcAAAAsElEQVR4nO3Tyw6CMBAFUOgLKFTE//9YAaNrV5qQcxaTtqvemUzXAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKnfLUfp+vfLX//zQzHnVIY0hrCEKe6WKfcx7p3o48WbsIytDfW2tXWdtnLfSlnbGtsjT3Uu9eLhY6opzPmce6ohzMNY07hHT3UOF8/evZb93PfP8bwcFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DtPfWUCzutL01QAAAAASUVORK5CYII="}></img>
        </Grid>
        <Grid item xs={2} >
        <h1 className="header">Globe News</h1>
        </Grid>
        </Grid>
        )
  }

export default Header;