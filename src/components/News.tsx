import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import newsData from "../data/news.json";
import { useDispatch, useSelector, useStore } from "react-redux";

function News(){
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();

  console.log("jin")
  console.log(useSelector(() => store.getState()))
  const category = useSelector(() => store.getState().category);
  const country = useSelector(() => store.getState().country);


  const countries = newsData
  const activeCountries = newsData.filter(news => news.status == true)
  const filteredCountries = newsData.filter(news => news.address.country === "Germany")
  const activeFilteredCountries = newsData.filter(news => (news.address.country === country && news.category === category))



    return (
        <div>
        { activeFilteredCountries.map(news => (
            <div  className="newsList">
            <p>{news.headline}</p>
            <p className="newsContent">{news.content}</p>
            </div>
          ))}
          </div>
    )
        }

export default News;