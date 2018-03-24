import * as React from "react";
import DataLoader from "./DataLoader";

const SurveyList = () => (
  <div>
    <h1>SurveyList</h1>
    <DataLoader>
      {({ surveys }) =>
        surveys.map(s => <div key={s.name}>name: {s.name}</div>)
      }
    </DataLoader>
  </div>
);

export default SurveyList;
