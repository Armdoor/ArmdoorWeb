import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Story from "./components/Intro/story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "",
    element: <Story/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);