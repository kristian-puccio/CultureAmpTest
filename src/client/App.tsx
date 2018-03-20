import * as React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { StoreState } from "./reducers";
// import Routes from "./Routes";

interface Props {
  store: Store<StoreState>;
}

// <Routes />
function App(props: Props) {
  return (
    <Provider store={props.store}>
      <div className="bg-blue-darker mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div>I am some content!</div>
      </div>
    </Provider>
  );
}

export default hot(module)(App);
