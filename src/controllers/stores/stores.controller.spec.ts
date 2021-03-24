import { Test, TestingModule } from "@nestjs/testing";
import { Request } from "express";
import { of, throwError } from "rxjs";
import { ConfigService } from "../../service/config";

import { StoresController } from "./stores.controller";
import { GetGroupStoresResponse } from "./stores.controller.i";

describe("StoresController", () => {
  let controller: StoresController;

  let req: Request;

  class MockGetStoresService {
    public getAll$ = jest.fn(() => of());
  }

  class UserAuthServiceMock {
    public getUserInfo$ = jest.fn().mockReturnValue({
      userId: "xxxx-xxxxxxxx-xxxxxxxxxxxx",
    });
  }

  class MockConfigService {
    public appEnv = () => ({
      cieServer: "url",
    });
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoresController],
      providers: [{ provide: ConfigService, useClass: MockConfigService }],
    }).compile();

    controller = module.get<StoresController>(StoresController);

    req = { headers: {} } as Request;
    req.headers["X-requestId"] = "123";
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
