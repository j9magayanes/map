import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import Screen from "./Screen";
import newsData from "../data/news.json";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY } from "../actionCreators";
import { Button } from "@mui/material";
import { categoryReducer } from "../rootReducer";

function Map() {
  const dispatch = useDispatch();
  const store = useStore();
  const category = useSelector(() => store.getState().categoryReducer.category);

  const [country, setCountry] = useState("");
  const activeCategories = newsData.filter(
    (news) => news.category === category
  );

  function handleOnClick(country: string) {
    dispatch({
      type: ADD_COUNTRY,
      country: country,
    });
  }

  useEffect(() => {

  }, [store.getState().categoryReducer.category]);

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
              setCountry(news.address.country);
            },
          }}
        >
          <Popup className="popUp">
            <Screen />
            <Button
              onClick={() => {
                handleOnClick(country);
              }}
            >
              View List
            </Button>
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
