import * as React from "react";
import DataLoader from "./DataLoader";

const SurveyList = () => (
  <div>
    <h1>SurveyList</h1>
    <DataLoader>
      {data => {
        console.log(data, "<<<< got data");
        return <div>inside</div>;
      }}
    </DataLoader>
  </div>
);

export default SurveyList;
