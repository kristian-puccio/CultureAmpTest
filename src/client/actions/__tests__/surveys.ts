import * as configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Constants } from "../index";
import * as fetch from "jest-fetch-mock";
import { fetchSurveysList } from "../surveys";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("survyes actions", () => {
  afterEach(() => {
    // So none of the fetch moch's affect any other test
    fetch.resetMocks();
  });

  it("should set dispatch start + success actions with a valid response", async () => {
    fetch.mockResponse(
      JSON.stringify({
        survey_results: [],
      })
    );
    const store = mockStore({});
    await store.dispatch(fetchSurveysList());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toBe(Constants.SURVEYLIST_REQUEST_START);
    expect(actions[1].type).toBe(Constants.SURVEYLIST_REQUEST_SUCCESS);
  });

  it("should set dispatch start + failure actions with a valid response", async () => {
    // TODO: pass in different error obejcts to check the message extraction
    fetch.mockReject();
    const store = mockStore({});
    await store.dispatch(fetchSurveysList());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toBe(Constants.SURVEYLIST_REQUEST_START);
    expect(actions[1].type).toBe(Constants.SURVEYLIST_REQUEST_FAILURE);
  });
});
