import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../reducers";
import {
  SurveyRequestStart,
  SurveyRequestSuccess,
  SurveyRequestFailure,
} from "./surveys";

export type MyThunkAction<R> = ThunkAction<R, StoreState, void>;
export type MyDispatch = Dispatch<StoreState>;

export enum Constants {
  SURVEYLIST_REQUEST_START = "SURVEYLIST_REQUEST_START",
  SURVEYLIST_REQUEST_SUCCESS = "SURVEYLIST_REQUEST_SUCCESS",
  SURVEYLIST_REQUEST_FAILURE = "SURVEYLIST_REQUEST_FAILURE",
}

export type ActionTypes =
  | SurveyRequestStart
  | SurveyRequestSuccess
  | SurveyRequestFailure;
