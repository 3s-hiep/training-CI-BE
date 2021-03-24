import { Test, TestingModule } from "@nestjs/testing";
import { Response } from "express";

import { ConfigService } from "../../service/config";

import { EnvironmentController } from "./environment.controller";

describe("/env, /hello-world", () => {
  let controller: EnvironmentController;
  let configService: ConfigService;

  class ConfigServiceMock {
    public appEnv = jest.fn();
  }

  const mockResponse: () => jest.Mocked<Response> = () => {
    const res: jest.Mocked<Response> = {} as jest.Mocked<Response>;
    res.status = jest.fn().mockReturnValue(res);
    res.sendStatus = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.end = jest.fn();

    return res;
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentController],
      providers: [{ provide: ConfigService, useClass: ConfigServiceMock }],
    }).compile();

    controller = module.get<EnvironmentController>(EnvironmentController);
    configService = module.get<ConfigService>(ConfigService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
    expect(configService).toBeDefined();
  });

  describe(EnvironmentController.prototype.getEnvironment.name, () => {
    it("should return env url", () => {
      // arrange
      const res = mockResponse();

      const response = {
        cieAppSite: "http://localhost:0001",
        cieServer: "http://localhost:0002",
        userAuthServer: "http://localhost:0003",
      };
      jest.spyOn(configService, "appEnv").mockReturnValue(response as any);

      const expected = {
        cieAppSite: "http://localhost:0001",
        cieServer: "http://localhost:0002",
        userAuthServer: "http://localhost:0003",
      };

      // act
      controller.getEnvironment(res);

      // assert
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith(expected);
      expect(res.end).toBeCalled();
    });

    it("should return env not url", () => {
      // arrange
      const res = mockResponse();

      const response = {
        cieAppSite: undefined,
        cieServer: undefined,
        userAuthServer: undefined,
      };
      jest.spyOn(configService, "appEnv").mockReturnValue(response as any);

      const expected = {
        cieAppSite: "",
        cieServer: "",
        userAuthServer: "",
      };

      // act
      controller.getEnvironment(res);

      // assert
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith(expected);
      expect(res.end).toBeCalled();
    });
  });

  describe(EnvironmentController.prototype.getConditionMonitoring.name, () => {
    it("should return good", () => {
      // arrange
      const res = mockResponse();

      const expected = { status: 200, message: "Goood!!" };
      // act
      controller.getConditionMonitoring(res);

      // assert
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith(expected);
      expect(res.end).toBeCalled();
    });
  });
});
