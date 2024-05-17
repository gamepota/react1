import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function SpringRoot() {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#eee",
          display: "flex",
          gap: "5px",
        }}
      >
        <div>
          <a href="/spring/learn">LEARN</a>
        </div>
        <div>
          <a href="/spring/api">API</a>
        </div>
        <div>
          <a href="/spring/doc">DOC</a>
        </div>

        <div>
          <Link to="/spring/learn">LEARN</Link>
        </div>
        <div>
          <Link to="/spring/api">API</Link>
        </div>
        <div>
          <Link to="/spring/doc">DOC</Link>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "spring",
    element: <SpringRoot />,
    children: [
      { path: "api", element: <div>api page</div> },
      { path: "doc", element: <div>doc page</div> },
      { path: "learn", element: <div>learn page</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
