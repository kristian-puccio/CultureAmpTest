import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer, { StoreState } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export function setupStore() {
  return createStore<StoreState>(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
