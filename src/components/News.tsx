import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import newsData from "../data/news.json";

function News(){

  const countries = newsData
  const activeCountries = newsData.filter(news => news.status == true)
  const filteredCountries = newsData.filter(news => news.address.country === "Germany")
  const activeFilteredCountries = newsData.filter(news => (news.address.country === "USA" && news.category === "Technology" ))

    return (
        <div>
        { activeCountries.map(news => (
            <div  className="newsList">
            <p>{news.headline}</p>
            <p className="newsContent">{news.content}</p>
            </div>
          ))}
          </div>
    )
        }

export default News;