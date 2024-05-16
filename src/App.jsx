import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.get("/api/someurl2");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <hr />
      <button onClick={handleClickButton3}>get2</button>
      <button onClick={handleClickButton4}>post2</button>
    </div>
  );
}

export default App;
