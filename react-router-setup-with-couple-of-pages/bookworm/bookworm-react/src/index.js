import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";



ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
