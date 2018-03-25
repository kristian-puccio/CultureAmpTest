import { ActionTypes, Constants } from "../actions";
import { SurveyListResponse } from "../api";

export interface Survey {
  name: string;
  participantCount: number;
  responseRate: number;
  submittedResponseCount: number;
  url: string;
}

export interface StoreState {
  // Is the data loading?
  readonly isFetching: boolean;

  // The list of surveys, this will be null if we don't have any data or
  // haven't fetched yet.
  readonly surveys: ReadonlyArray<Survey> | null;
}

export const initialState = {
  isFetching: false,
  surveys: null,
};

export default function reducer(
  state: StoreState = initialState,
  action: ActionTypes
): StoreState {
  switch (action.type) {
    case Constants.SURVEYLIST_REQUEST_START: {
      return { ...state, isFetching: true };
    }

    case Constants.SURVEYLIST_REQUEST_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        surveys: convertSurveys(action.payload),
      };
    }

    case Constants.SURVEYLIST_REQUEST_FAILURE: {
      return { ...state, isFetching: false };
    }
  }
  return state;
}

function convertSurveys(response: SurveyListResponse): ReadonlyArray<Survey> {
  return response.survey_results.map(s => ({
    name: s.name,
    participantCount: s.participant_count,
    responseRate: s.response_rate,
    submittedResponseCount: s.submitted_response_count,
    url: s.url,
  }));
}
