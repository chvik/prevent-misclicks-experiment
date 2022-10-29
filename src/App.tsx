import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { Relayout } from "./routes/relayout";
import { Disappear } from "./routes/disappear";
import { Covered } from "./routes/covered";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Relayout />,
      },
      {
        path: "/relayout",
        element: <Relayout />,
      },
      {
        path: "/disappear",
        element: <Disappear />,
      },
      {
        path: "/covered",
        element: <Covered />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
