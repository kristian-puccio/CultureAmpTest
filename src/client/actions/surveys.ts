import { Action } from "redux";
import { Constants, MyThunkAction } from "./index";
import { getSurveys, SurveyListResponse } from "../api";

export interface SurveyRequestStart extends Action {
  type: Constants.SURVEYLIST_REQUEST_START;
}

export interface SurveyRequestSuccess extends Action {
  type: Constants.SURVEYLIST_REQUEST_SUCCESS;
  payload: SurveyListResponse;
}

export interface SurveyRequestFailure extends Action {
  type: Constants.SURVEYLIST_REQUEST_FAILURE;
}

/**
 * fetchSurveysList calls api.getSuverys if the surveys cache is empty.
 * it also sets isFetching to be true while the surveys are being fetched.
 */
export function fetchSurveysList(): MyThunkAction<void> {
  return async (dispatch, getStore) => {
    // if needs to fetch

    dispatch({ type: Constants.SURVEYLIST_REQUEST_START });
    try {
      const result = await getSurveys();
      dispatch({ type: Constants.SURVEYLIST_REQUEST_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: Constants.SURVEYLIST_REQUEST_FAILURE });
    }
  };
}
