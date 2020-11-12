import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Surveylist from "./components/Surveylist"; 
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
       <Surveylist/>
    </div>,
    destination
);