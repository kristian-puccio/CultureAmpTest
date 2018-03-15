import * as React from "react";
import * as ReactDOM from "react-dom";
import { setupStore } from "./store";
import App from "./App";

const store = setupStore();

const target = document.getElementById("main-content") as HTMLElement;
ReactDOM.render(<App store={store} />, target);
