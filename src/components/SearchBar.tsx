import React, { useState } from "react";  
import "./Header.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect, useDispatch, useStore } from "react-redux";
import { addCategory, ADD_CATEGORY } from "../actionCreators";

function SearchBar() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();

  function handleSelectChange(event: { target: { value: any } }) {
    dispatch({
      type: ADD_CATEGORY,
      category: event.target.value,
    });
  }
  const category = store.getState().category;

  return (
    <FormControl fullWidth >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="category"
        onChange={handleSelectChange}
        className="searchbar"
      >
        <option value="all" >Select a Category</option>
        <option value="carbon">Carbon Emission</option>
        <option value="wildfire">Wildfire</option>
        <option value="earthquake">Earthquake</option>
      </Select>
    </FormControl>
  );
}

function mapStateToProps(state: { category: any }) {
  const { category } = state;
  return { category: state.category };
}

export default connect(mapStateToProps)(SearchBar);

function dispatch(arg0: { type: string; category: any }) {
  throw new Error("Function not implemented.");
}
