import React from "react";
import { value1, value2, value3, value4 } from "./MyValues.jsx";

function App(props) {
  return (
    <div>
      <div> value1: {value1}</div>
      <div> value2: {value2}</div>
      <div>value3: {value3}</div>
      <div>value4: {value4}</div>
    </div>
  );
}

export default App;
