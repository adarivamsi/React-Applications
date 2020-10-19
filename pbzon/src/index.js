import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./data-layer/reducer";
import { StateProvider } from "./data-layer/StateProvider";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
