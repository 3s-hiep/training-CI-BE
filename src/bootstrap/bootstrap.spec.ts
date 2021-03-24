import { NestFactory } from "@nestjs/core";

import { Test } from "@nestjs/testing";

import { of } from "rxjs";

import { App } from "./bootstrap";
import { ConfigService } from "../service/config";

class ServiceMock {
  public configureGracefulShutdown = jest.fn((func) => func());
  public teardown$ = jest.fn();
  public getPublicKeys$ = jest.fn(() => of(1));
}

class NestMicroserviceMock {
  public useGlobalPipes = jest.fn();
}

class NestApplicationMock {
  public connectMicroservice = jest.fn(() => new NestMicroserviceMock());
  public useGlobalPipes = jest.fn();
  public enableShutdownHooks = jest.fn();
  public ServiceMock = new ServiceMock();
  public get = jest.fn(() => this.ServiceMock);
  public setGlobalPrefix = jest.fn();
  public listen = jest.fn();
  public useLogger = jest.fn();
  public use = jest.fn().mockReturnThis();
  public enableCors = jest.fn();
}

describe(App.name, () => {
  let app;
  let module;

  beforeEach(async () => {
    jest.restoreAllMocks();
    app = new NestApplicationMock();
    module = await Test.createTestingModule({});
  });

  describe(App.start.name, () => {
    it("should call NestFactory.create with AppModule", () => {
      // arrange
      jest.spyOn(NestFactory, "create").mockImplementation(() => new Promise((resolve) => resolve(app)));
      jest.spyOn(App, "setup").mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve();
          }),
      );

      // act
      return App.start(module)
        .then(() => {
          expect(NestFactory.create).toHaveBeenCalledWith(module);
          expect(App.setup).toHaveBeenCalled();
        })
        .catch((e) => fail(e));
    });
  });

  describe(App.setup.name, () => {
    it("should call functions about this app", () => {
      // arrange

      // act
      return App.setup(app)
        .then(() => {
          expect(app.enableShutdownHooks).toHaveBeenCalled();
          expect(app.listen).toHaveBeenCalled();
          expect(app.ServiceMock.configureGracefulShutdown).toHaveBeenCalled();
          expect(app.ServiceMock.teardown$).toHaveBeenCalledWith(app);
          expect(app.ServiceMock.getPublicKeys$).toHaveBeenCalled();
        })
        .catch((e) => fail(e));
    });
  });

  it("should set cors for frontend", () => {
    // arrange
    const expected = {
      origin: new ConfigService().appEnv().cieAppSite,
      allowedHeaders: "*, Content-Type",
      credentials: true,
    };

    return App.setup(app)
      .then(() => {
        expect(app.enableCors).toHaveBeenCalledWith(expected);
      })
      .catch((e) => fail(e));
  });
});
