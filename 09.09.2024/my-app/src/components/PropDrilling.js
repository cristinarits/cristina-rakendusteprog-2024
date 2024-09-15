import React from "react";
import { useState } from "react";
import './PropDrilling.css';

const PropDrilling = () => {
  const [weather, setWeather] = useState("☀️")

  return <Europe weather={weather} />
}

const Europe = ({ weather }) => {
  return <Estonia weather={weather} />
}

const Estonia = ({ weather }) => {
  return <Tallinn weather={weather} />
}

const Tallinn = ({ weather }) => {
    return <div className="weather-icon">{weather}</div>;
}

export default PropDrilling