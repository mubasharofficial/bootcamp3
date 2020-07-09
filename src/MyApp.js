import React from 'react';
import logo from './logo.svg';
import './App.css';
import Din from './dinner.js';

function Zero() {
  return (
    <div className="Test">
      {/* <h1>Welcome To Pakistan</h1> */}
      <Din DishName="bryaine" sweet="butter"/>
      <Din DishName="KadoShareef"sweet="nimko"/>
      
      
    </div>
  );
}

export default Zero;
