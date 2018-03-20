import * as fetch from "jest-fetch-mock";
import { getSurveys } from "../index";

describe("api", () => {
  describe("getSurveys", () => {
    it("should return json", async () => {
      fetch.mockResponse(JSON.stringify({ access_token: "12345" }));

      const result = await getSurveys();
      expect(typeof result).toEqual("object");
    });
  });
});
