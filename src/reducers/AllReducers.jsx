import React from "react";
import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const AllReducers = combineReducers({
    CartReducer,
})

export default AllReducers;
