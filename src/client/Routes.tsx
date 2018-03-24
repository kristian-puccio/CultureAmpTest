import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurveyList from "./pages/SurveyList";
import SurveyResults from "./pages/SurveyResults";
import Error404 from "./pages/Error404";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={props => <SurveyList />} />
      <Route exact path="/survey/:id" render={props => <SurveyResults />} />

      {/* This is displayed when no routes above match */}
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default Routes;
