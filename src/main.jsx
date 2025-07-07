import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const hoot = ReactDOM.createRoot(document.getElementById("root"));
hoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
