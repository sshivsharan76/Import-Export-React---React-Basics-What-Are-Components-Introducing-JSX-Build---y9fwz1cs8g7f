import React, { Component, useState } from "react";
import Heading from './Heading.js';
import InputQuery from './InputQuery.js';
import SubHeading from './SubHeading.js';
import SubmitButton from './SubmitButton.js';



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

