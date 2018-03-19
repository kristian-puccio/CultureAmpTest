import * as React from "react";
import * as ReactDOM from "react-dom";
import { setupStore } from "./store";
import App from "./App";
import "../styles.css";

const store = setupStore();

const target = document.getElementById("main-content");
if (!target)
  throw new Error(
    'Cant find div with ID "main-content" to render React inside.'
  );

ReactDOM.render(<App store={store} />, target);
