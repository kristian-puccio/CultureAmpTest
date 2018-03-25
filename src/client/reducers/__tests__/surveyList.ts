import { Constants, ActionTypes } from "../../actions";
import reducer, { initialState } from "../surveyList";

describe("suveyList reducer", () => {
  it("should set isFetching to true when fetching data", () => {
    // We aren't fetching on load so make sure it's false
    expect(initialState.isFetching).toBe(false);

    const action: ActionTypes = {
      type: Constants.SURVEYLIST_REQUEST_START,
    };
    const newState = reducer(initialState, action);
    expect(newState.isFetching).toBe(true);
  });

  it("should set isFetching to false when we have fetched data", () => {
    // We aren't fetching on load so make sure it's false
    const state = { ...initialState, isFetching: true };

    const action: ActionTypes = {
      type: Constants.SURVEYLIST_REQUEST_SUCCESS,
      payload: { survey_results: [] },
    };
    const newState = reducer(state, action);
    expect(newState.isFetching).toBe(false);
  });

  it("should set isFetching to false when we have FAILED to fetch data", () => {
    // We aren't fetching on load so make sure it's false
    const state = { ...initialState, isFetching: true };

    const action: ActionTypes = {
      type: Constants.SURVEYLIST_REQUEST_FAILURE,
    };
    const newState = reducer(state, action);
    expect(newState.isFetching).toBe(false);
  });

  it("should store the surveys correctly after fetching", () => {
    const sampleData = {
      survey_results: [
        {
          name: "Simple Survey",
          url: "/survey_results/1.json",
          participant_count: 6,
          response_rate: 0.8333333333333334,
          submitted_response_count: 5,
        },
        {
          name: "Acme Engagement Survey",
          url: "/survey_results/2.json",
          participant_count: 271,
          response_rate: 1.0,
          submitted_response_count: 271,
        },
      ],
    };

    // Setup state as it would appear before we receive data.
    const state = { ...initialState, isFetching: true };
    const action: ActionTypes = {
      type: Constants.SURVEYLIST_REQUEST_SUCCESS,
      payload: sampleData,
    };
    const newState = reducer(state, action);
    expect(newState.surveys).toHaveLength(2);
    expect(newState.surveys[0].name).toBe("Simple Survey");
    expect(newState.surveys[0].responseRate).toBe(0.8333333333333334);
    expect(newState.surveys[1].submittedResponseCount).toBe(271);
  });
});
