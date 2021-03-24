import { APIEndpointEnvironment } from "./api-endpoint";

describe("APIEndpointEnvironment", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("constructor()", () => {
    it("should init default values when .env files do not exist", () => {
      // arrage
      const expected = {
        publickeys: "",
        login: "",
        token: "",
        userInfo: "",
        applicationFirstLogin: "",
        changePassword: "",
        logout: "",
      };
      // act
      const actual = new APIEndpointEnvironment();

      // assert
      expect(actual).toEqual(expected);
    });

    it("should get the server endpoint from the .env file", () => {
      // arrage
      const env: any = {
        API_ENDPOINT_PUBLICKEYS: expect.any(String),
        API_ENDPOINT_LOGIN: expect.any(String),
        API_ENDPOINT_TOKEN: expect.any(String),
        API_ENDPOINT_USER_INFO: expect.any(String),
        API_ENDPOINT_APPLICATION_FIRST_LOGIN: expect.any(String),
        API_ENDPOINT_CHANGE_PASSWORD: expect.any(String),
        API_ENDPOINT_LOGOUT: expect.any(String),
      };

      const expected = {
        publickeys: expect.any(String),
        login: expect.any(String),
        token: expect.any(String),
        userInfo: expect.any(String),
        applicationFirstLogin: expect.any(String),
        changePassword: expect.any(String),
        logout: expect.any(String),
      };

      // act
      const actual = new APIEndpointEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
