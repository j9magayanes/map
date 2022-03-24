import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Header.css";
import newsData from "../data/news.json";
import { useDispatch, useSelector, useStore } from "react-redux";

function Screen() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();

  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);

  const countries = newsData;
  const activeCountries = newsData.filter((news) => news.status == true);
  const filteredCountries = newsData.filter(
    (news) => news.address.country === "Germany"
  );
  const activeFilteredCountries = newsData.filter(
    (news) => news.address.country === country && news.category === category
  );

  return (
    <Carousel>
      {activeFilteredCountries.map((item, i) => (
        <div className="screen">
            <div>
              <img className="screenImage" src={item.image}></img>
            </div>
            <div>
              <p className="headline">{item.headline}</p>
            </div>
            <div>
              <p className="newsContent">{item.content}</p>
            </div>
          </div>
      ))}
    </Carousel>
  );
}

export default Screen;
