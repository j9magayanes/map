import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Header.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect, useDispatch, useStore} from "react-redux";
import { addCategory, ADD_CATEGORY } from "../actionCreators";





function SearchBar(){
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();

  function handleSelectChange  (event: { target: { value: any; }; }) {
      dispatch({
        type: ADD_CATEGORY,
        category: event.target.value
      })
}
    const category = store.getState().category

    return (
      <select onChange={(handleSelectChange)}> 
      <option value="all">All Category</option>
      <option value="news">News</option>
      <option value="politics">Politics</option>
      <option value="business">Business</option>
      <option value="technology">Technology</option>
      <option value="science">Science and Education</option>
      <option value="technology">Lifestyle</option>
      <option value="travel">Travel</option>
      <option value="sports">Sports</option>
      <option value="culture">Culture</option>
      <option value="music">Music</option>
      <option value="cars">Cars</option>
  </select>
    )
  }

  function mapStateToProps(state: { category: any; }) {
    const { category } = state
    return { category : state.category}
  }

export default connect(mapStateToProps)(SearchBar);

function dispatch(arg0: { type: string; category: any; }) {
  throw new Error("Function not implemented.");
}
