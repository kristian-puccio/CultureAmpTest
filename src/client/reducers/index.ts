import { combineReducers } from "redux";

const reducerThing = (state: boolean, action: Object) => {
  return action;
};

export interface StoreState {
  readonly reducerThing: boolean;
}

const reducer = combineReducers<StoreState>({ reducerThing });

export default reducer;
