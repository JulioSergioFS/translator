import React from "react";
import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App";
// i18n
import "./locales/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
