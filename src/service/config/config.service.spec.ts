import { ConfigServiceModule } from "./config.service.module";
import { Test, TestingModule } from "@nestjs/testing";

import { ConfigService } from "./config.service";
import { AppEnvironment } from "../../environment/app";
import { APIEndpointEnvironment } from "../../environment/api-endpoint";

describe("ConfigService", () => {
  let service: ConfigService;

  beforeEach(async () => {
    AppEnvironment.prototype.constructor = jest.fn();
    APIEndpointEnvironment.prototype.constructor = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigServiceModule],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("AppEnvironment", () => {
    it("should return AppEnvironment", () => {
      // arrange
      const expected = new AppEnvironment();

      // act
      const actual = service.appEnv();

      // assert
      expect(actual).toEqual(expected);
    });
  });

  describe("APIEndpointEnvironment", () => {
    it("should return APIEndpointEnvironment", () => {
      // arrange
      const expected = new APIEndpointEnvironment();

      // act
      const actual = service.apiEndpointEnv();

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
