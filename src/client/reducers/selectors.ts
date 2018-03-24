import { StoreState } from "./index";
import { Survey } from "./surveyList";

// Re-exporting this here so in the components we can get all types from this file.
export { Survey } from "./surveyList";

/**
 * getSurveyListIsFetching returns if we are currently loading the list of surveys
 */
export const getSurveyListIsFetching = (state: StoreState): boolean =>
  state.surveyList.isFetching;

/**
 * Gets the list of survyes, note will be null if we don't have data.
 */
export const getSurveyList = (
  state: StoreState
): ReadonlyArray<Survey> | null => state.surveyList.surveys;
