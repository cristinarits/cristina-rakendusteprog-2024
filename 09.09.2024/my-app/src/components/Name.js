import React from "react";
import "./Name.css";

const Name = ({ title = "World" }) => {
  return <h1>Hello {title}</h1>;
};

export default Name;