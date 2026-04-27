import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, routerProvider} from "react-router"

// import index from "./pages"
// import login from "./pages"
// import register "./pages"
// this is which pages i want on my jsx code

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <index/>
//   },
//   {
//     path: "/login",
//     element: <login/>
//   },
//   {
//     path: "/register",
//     element: <register/>
//   },
// ])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
