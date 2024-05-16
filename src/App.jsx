import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/api/main42/sub1").then(() => {}); // then의 함수를 파라미터로 받음
  }

  return (
    <div>
      <button onClick={handleClick1}>응답</button>
    </div>
  );
}

export default App;
