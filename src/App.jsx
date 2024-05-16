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

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "son@gmail.com");
    // axios.get("/api/someurl3?" + params);
    axios.get(`/api/someurl3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "서울");
    params.append("country", "한국");

    axios.post("/api/someurl3", params);
  }

  function handleClickButton7() {
    const data = new URLSearchParams();
    data.append("address", "신촌");
    data.append("birthDate", "2000-01-01");
    data.append("inserted", "1999-12-12T13:12:11");

    axios.get(`/api/someurl4?${data}`);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("foods", "pizza");
    params.append("foods", "coffee");
    params.append("item", "iphone");

    axios.post("/api/someurl4", params);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <hr />
      <button onClick={handleClickButton3}>get2</button>
      <button onClick={handleClickButton4}>post2</button>
      <hr />
      <button onClick={handleClickButton5}> get 요청 시 query string</button>
      <button onClick={handleClickButton6}> post 요청 시 data</button>
      <hr />
      {/* /api/someurl4 get/post with data */}
      <button onClick={handleClickButton7}>get 요청 with data</button>
      <button onClick={handleClickButton8}>post 요청 with data</button>
    </div>
  );
}

export default App;
