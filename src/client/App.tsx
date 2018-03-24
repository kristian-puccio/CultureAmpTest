import * as React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { StoreState } from "./reducers";
import Routes from "./Routes";

interface Props {
  store: Store<StoreState>;
}

function App(props: Props) {
  return (
    <Provider store={props.store}>
      <Routes />
    </Provider>
  );
}

export default hot(module)(App);
