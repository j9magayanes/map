import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Newslist.css';
import News from "./News"
import Search from "./Search"
import { Button } from "@mui/material";
import { ADD_COUNTRY, REMOVE_CATEGORY, REMOVE_COUNTRY } from "../actionCreators";
import { connect, useDispatch, useSelector, useStore } from "react-redux";

function Newslist(_props: any) {
  const dispatch = useDispatch();
  const state = useState();
  const store = useStore();
  const category = useSelector(() => store.getState().country);
  const [ country, setCountry] = useState('')

  function handleOnClick() {
    dispatch({
      type: REMOVE_COUNTRY,
    });
  }

  return  <>
      <Search country={_props.country}/>
      <News/>
      <Button onClick={()=> handleOnClick()}>Map</Button>
</>
}
function mapStateToProps(state: { country: any }) {
  const { country } = state;
  return { country: state.country };
}

export default connect(mapStateToProps)(Newslist);
