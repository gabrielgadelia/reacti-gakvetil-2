import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/index.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/regsiter.jsx";
import Layout from "./pages/layout.jsx";
import Provision from "./pages/Provision.jsx"

const routor = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/Provision/:id", element: <Provision /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routor} />
  </StrictMode>,
);
