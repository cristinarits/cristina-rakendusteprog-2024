import React from "react";
import "./Show.css";

const Show = ({ show, toggleShow }) => {
    return (
        <div className="show-container">
          <h1>Show</h1>
          {show ? <p>Showing</p> : <p>Not showing</p>}
          {show && <p>Showing again</p>}
          <button className="toggle-button" onClick={toggleShow}>Toggle show</button>
        </div>
      );
}

export default Show