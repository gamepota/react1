function MyComponent() {
  return (
    // 최상위 컴포넌트 사용하지 않을 때 -> fragent -> <></>
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Earum, nulla, repudiandae?</p>
    </>
  );
}

function MyComp() {
  //최상위 컴포넌트는 1개임 div로 감싸주면 해결
  return (
    <div>
      <p>뭐</p>
      <p>뭐뭣</p>
    </div>
  );
}
function MyTag() {
  // jsx 코드가 여러 줄일때 () 사용
  return (
    <div>
      {" "}
      hello react
      <p>Lorem ipsum .</p>
      <p>Aliquid asp</p>
    </div>
  );
}

function App() {
  return (
    <div>
      hello react
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
