import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import Screen from "./Screen";
import newsData from "../data/news.json";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY } from "../actionCreators";
import { Button } from "@mui/material";

function Map() {
  const dispatch = useDispatch();
  const store = useStore();
  const category = useSelector(() => store.getState().category);
  const [ country, setCountry ] = useState('');

  const categories = newsData;
  const activeCategories = newsData.filter(
    (news) => news.category === category
  );
  const filteredCountries = newsData.filter(
    (news) => news.address.country === "Germany"
  );
  const activeFilteredCountries = newsData.filter(
    (news) => news.address.country === "Germany" && news.status == false
  );

  function handleOnClick(country: string) {
    dispatch({
      type: ADD_COUNTRY,
      country: country
    });
  }

    console.log(store.getState().country)
  

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={4}
      maxZoom={3}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      bounceAtZoomLimits={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
        minZoom={2}
      />
      {activeCategories.map((news) => (
        <Marker
          key={news.id}
          position={[news.gps.latitude, news.gps.longitude]}
          eventHandlers={{
            click: () => {
              setCountry(news.address.country)
            },
          }}
        >
          <Popup  className="popUp">
              <Button onClick={() => {
                handleOnClick(country)
              }}>View List</Button>
            <Screen/>
          </Popup>
        </Marker>
        
      ))}
    </MapContainer>
  );
  
        }
  function mapStateToProps(state: { country: string }) {
    const { country } = state;
    return { country: state.country };
  }
  
export default connect(mapStateToProps)(Map);

