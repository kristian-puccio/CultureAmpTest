import * as fetch from "jest-fetch-mock";
import { getSurveys } from "../index";

describe("api", () => {
  beforeEach(() => {
    // So none of the fetch moch's affect any other test
    fetch.resetMocks();
  });

  describe("getSurveys", () => {
    // Are we decoding the body into json in the getSurveys call?
    it("should return json", async () => {
      fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
      const result = await getSurveys();
      expect(typeof result).toEqual("object");
    });

    it("should call the base api path", async () => {
      fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
      await getSurveys();
      // Make sure we actually make 1 and only 1 call.
      // @ts-ignore Need to update the jest-fetch-mock definition to add jests mock function
      expect(fetch.mock.calls.length).toEqual(1);

      // Make sure we are hitting the right endpoint.
      // Check the https://github.com/jefflau/jest-fetch-mock#using-fetchmock-to-inspect-the-mock-state-of-each-fetch-call for why we have this crazy [0][0] lookup
      // @ts-ignore
      expect(fetch.mock.calls[0][0]).toEqual("/api/");
    });
  });
});
