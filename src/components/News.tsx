import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import { Grid } from '@material-ui/core';
import newsData from "../data/news.json";
import { useDispatch, useSelector, useStore } from "react-redux";

function News(){
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();


  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);



  const countries = newsData
  const activeCountries = newsData.filter(news => news.isActive == true)
  const filteredCountries = newsData.filter(news => news.country === "germany")
  const activeFilteredCountries = newsData.filter(news => (news.country === country && news.category === category))

    return (
        <div>
        { activeFilteredCountries.map(news => (
            <Grid container>
              <Grid item xs={3}>
            <div  className="newsList">
            <img className="newsListImage" src={news.image}></img>
            </div>
            </Grid>
            <Grid item xs={9}>
            <div className="newsListContents">
            <p className="newsListHeadline">{news.headline}</p>
            <p className="newsListContent">{news.content}</p>
            </div>
            </Grid>
            </Grid>
          ))}
          </div>
    )
        }

export default News;