import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * RouteParams defines the structure of the parameters in the url path.
 */
interface RouteParams {
  surveyId: string;
}

/**
 * RouteProps wraps up the RouteParams into the format react-router
 * will be giving them to us as props.
 */
type RouteProps = RouteComponentProps<RouteParams>;

/**
 * The type Props is what we expect the shape of the props to be.
 */
type Props = RouteParams;

/**
 * SurveyResults displays the results of a survey.
 * It will fetch the results of the survey if we don't have it.
 * @param props the components props. see the type Props
 */
const SurveyResults = (props: Props) => {
  console.log(props, "<<< props");
  return (
    <div>
      <h1>SurveyResults</h1>
    </div>
  );
};

export default SurveyResults;
