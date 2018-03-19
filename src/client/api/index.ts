export interface SurveyList {
  survey_results: ReadonlyArray<{
    name: string;
    url: string;
    participant_count: number;
    response_rate: number;
    submitted_response_count: number;
  }>;
}

export async function getSurveys(): Promise<SurveyList> {
  const result = await fetch("/api/");
  return result.json();
}
