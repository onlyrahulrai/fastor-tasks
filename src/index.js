import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FastorProvider } from "./context/useFastor";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FastorProvider>
        <App />
      </FastorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
