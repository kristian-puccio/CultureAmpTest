import { combineReducers } from "redux";
import surveyList, { StoreState as SurveyListStoreState } from "./surveyList";

export interface StoreState {
  readonly surveyList: SurveyListStoreState;
}

const reducer = combineReducers<StoreState>({ surveyList });

export default reducer;
