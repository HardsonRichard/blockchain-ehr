import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
