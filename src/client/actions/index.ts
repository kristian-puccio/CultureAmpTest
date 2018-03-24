import { ThunkAction } from "redux-thunk";
import { StoreState } from "../reducers";
import { SurveyList } from "../api";

export type MyThunkAction<R> = ThunkAction<R, StoreState, void>;

export enum Constants {
  SURVEYLIST_REQUEST_START = "SURVEYLIST_REQUEST_START",
  SURVEYLIST_REQUEST_SUCCESS = "SURVEYLIST_REQUEST_SUCCESS",
  SURVEYLIST_REQUEST_FAILURE = "SURVEYLIST_REQUEST_FAILURE",
}

export type ActionTypes =
  | { type: Constants.SURVEYLIST_REQUEST_START }
  | { type: Constants.SURVEYLIST_REQUEST_SUCCESS; payload: SurveyList }
  | { type: Constants.SURVEYLIST_REQUEST_FAILURE };
