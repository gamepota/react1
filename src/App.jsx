import React from "react";

function App(props) {
  function action1() {
    //이름 있는 함수
    console.log("Action1");
  }
  action1(); // 함수 실행

  //이름 없는 함수
  const action2 = function () {
    console.log("anonymous action");
  };
  //arrow function
  const action3 = () => console.log("action3");
  return (
    <div>
      <button onClick={action1}>클릭!</button>
      <button onClick={action2}>클릭2</button>
      <button
        onClick={function () {
          console.log("anonymous action2");
        }}
      >
        클릭
      </button>
      <button onClick={action3}>크리링</button>
      <button onClick={() => console.log("anonymous action3")}>클릭333</button>
    </div>
  );
}

export default App;
