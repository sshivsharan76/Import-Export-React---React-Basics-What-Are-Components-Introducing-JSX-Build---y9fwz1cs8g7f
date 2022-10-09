import React, { Component, useState } from "react";
import './App.css';
import Heading From './Heading.js';
import InputQuery From './InputQuery.js';
import SubHeading From './SubHeading.js';
import SubmitButton From './SubmitButton.js';



const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
export default App;

