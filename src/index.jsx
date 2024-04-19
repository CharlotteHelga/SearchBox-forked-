import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./WeatherSearch";
import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <WeatherSearch />
    <h3></h3>
  </StrictMode>
);
