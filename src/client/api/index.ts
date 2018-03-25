/**
 * This is the structure of what the base api call returns.
 *
 * NOTE: I've set this to be readonly to encorage the use of immutability.
 */
export interface SurveyListResponse {
  readonly survey_results: ReadonlyArray<{
    name: string;
    url: string;
    participant_count: number;
    response_rate: number;
    submitted_response_count: number;
  }>;
}

/**
 * Calls the base api which returns a list of available surveys.
 */
export async function getSurveys(): Promise<SurveyListResponse> {
  const result = await fetch("/api/");

  // TODO: move this out to a common function
  if (result.ok) return result.json();

  //TODO: create error shape
  throw new Error("TODO");
}
