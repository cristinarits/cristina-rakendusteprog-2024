import React from 'react';
import './Minust.css';

const Minust = ({ name }) => {
    const hobbies = ["gaming", "learning random stuff", "walks in the nature"];

    return (
        <div className="container">
          <h1>{name}</h1>
          
          <h2>minu huvid/hobid:</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <p key={index}>{hobby}</p>
            ))}
          </ul>
    
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" id="email" name="email" required />
            </div>
    
            <div className="form-group">
              <label htmlFor="message">sõnum:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
    
            <button type="submit">saada sõnum</button>
          </form>
        </div>
      );
    };

export default Minust;