import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer, { StoreState } from "./reducers";
import { ActionTypes } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

// NOTE: V4 of redux is a big update to the TS typings.
// which means we will finially be able to have typesafe actions.
export function setupStore() {
  return createStore<StoreState>(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
