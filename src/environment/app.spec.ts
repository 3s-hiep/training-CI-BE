import { AppEnvironment } from "./app";

describe("AppEnvironment", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("constructor()", () => {
    it("should init default values when .env files do not exist", () => {
      // arrage
      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: false,
        sessionHttpOnly: false,
        sessionSecure: false,
        sessionSameSite: false,
        production: true,
      };

      // act
      const actual = new AppEnvironment({});

      // assert
      expect(actual).toEqual(expected);
    });

    it("should init values from env with false", () => {
      // arrage
      const env = {
        PORT: "3000",
        CIE_APP_SITE: "http://localhost:4200",
        CIE_SERVER: "http://localhost:3100",
        USER_AUTH_SERVER: "http://localhost:3200",
        REDIS_SERVER: "localhost",
        REDIS_PORT: "6379",
        REDIS_DB: "0",
        REDIS_USER_NAME: "",
        REDIS_PASSWORD: "",
        REDIS_TTL: "1800",
        SESSION_DOMAIN: "localhost",
        SESSION_SECRET: "GLORY LTD.",
        SESSION_PROXY: "false",
        SESSION_HTTP_ONLY: "false",
        SESSION_SECURE: "false",
        SESSION_SAME_SITE: "false",
        PRODUCTION: "true",
      };

      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: false,
        sessionHttpOnly: false,
        sessionSecure: false,
        sessionSameSite: false,
        production: true,
      };

      // act
      const actual = new AppEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });

    it("should init values from env with true", () => {
      // arrage
      const env = {
        PORT: "3000",
        CIE_APP_SITE: "http://localhost:4200",
        CIE_SERVER: "http://localhost:3100",
        USER_AUTH_SERVER: "http://localhost:3200",
        REDIS_SERVER: "localhost",
        REDIS_PORT: "6379",
        REDIS_DB: "0",
        REDIS_USER_NAME: "",
        REDIS_PASSWORD: "",
        REDIS_TTL: "1800",
        SESSION_DOMAIN: "localhost",
        SESSION_SECRET: "GLORY LTD.",
        SESSION_PROXY: "true",
        SESSION_HTTP_ONLY: "true",
        SESSION_SECURE: "true",
        SESSION_SAME_SITE: "true",
        PRODUCTION: "true",
      };

      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: true,
        sessionHttpOnly: true,
        sessionSecure: true,
        sessionSameSite: true,
        production: true,
      };

      // act
      const actual = new AppEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });

    it("should init values from env with else (1)", () => {
      // arrage
      const env = {
        PORT: "3000",
        CIE_APP_SITE: "http://localhost:4200",
        CIE_SERVER: "http://localhost:3100",
        USER_AUTH_SERVER: "http://localhost:3200",
        REDIS_SERVER: "localhost",
        REDIS_PORT: "6379",
        REDIS_DB: "0",
        REDIS_USER_NAME: "",
        REDIS_PASSWORD: "",
        REDIS_TTL: "1800",
        SESSION_DOMAIN: "localhost",
        SESSION_SECRET: "GLORY LTD.",
        SESSION_PROXY: "false",
        SESSION_HTTP_ONLY: "false",
        SESSION_SECURE: "auto",
        SESSION_SAME_SITE: "strict",
        PRODUCTION: "true",
      };

      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: false,
        sessionHttpOnly: false,
        sessionSecure: "auto",
        sessionSameSite: "strict",
        production: true,
      };

      // act
      const actual = new AppEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });

    it("should init values from env with else (2)", () => {
      // arrage
      const env = {
        PORT: "3000",
        CIE_APP_SITE: "http://localhost:4200",
        CIE_SERVER: "http://localhost:3100",
        USER_AUTH_SERVER: "http://localhost:3200",
        REDIS_SERVER: "localhost",
        REDIS_PORT: "6379",
        REDIS_DB: "0",
        REDIS_USER_NAME: "",
        REDIS_PASSWORD: "",
        REDIS_TTL: "1800",
        SESSION_DOMAIN: "localhost",
        SESSION_SECRET: "GLORY LTD.",
        SESSION_PROXY: "false",
        SESSION_HTTP_ONLY: "false",
        SESSION_SECURE: "auto",
        SESSION_SAME_SITE: "lax",
        PRODUCTION: "true",
      };

      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: false,
        sessionHttpOnly: false,
        sessionSecure: "auto",
        sessionSameSite: "lax",
        production: true,
      };

      // act
      const actual = new AppEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });

    it("should init values from env with else (3)", () => {
      // arrage
      const env = {
        PORT: "3000",
        CIE_APP_SITE: "http://localhost:4200",
        CIE_SERVER: "http://localhost:3100",
        USER_AUTH_SERVER: "http://localhost:3200",
        REDIS_SERVER: "localhost",
        REDIS_PORT: "6379",
        REDIS_DB: "0",
        REDIS_USER_NAME: "",
        REDIS_PASSWORD: "",
        REDIS_TTL: "1800",
        SESSION_DOMAIN: "localhost",
        SESSION_SECRET: "GLORY LTD.",
        SESSION_PROXY: "false",
        SESSION_HTTP_ONLY: "false",
        SESSION_SECURE: "auto",
        SESSION_SAME_SITE: "none",
        PRODUCTION: "true",
      };

      const expected = {
        port: 3000,
        cieAppSite: "http://localhost:4200",
        cieServer: "http://localhost:3100",
        userAuthServer: "http://localhost:3200",
        redisServer: "localhost",
        redisPort: 6379,
        redisDB: 0,
        redisUserName: "",
        redisPassword: "",
        redisTtl: 1800,
        sessionDomain: "localhost",
        sessionSecret: "GLORY LTD.",
        sessionProxy: false,
        sessionHttpOnly: false,
        sessionSecure: "auto",
        sessionSameSite: "none",
        production: true,
      };

      // act
      const actual = new AppEnvironment(env);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
