import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Error from "./Components/Error/Error.jsx";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Error>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Error>
);
