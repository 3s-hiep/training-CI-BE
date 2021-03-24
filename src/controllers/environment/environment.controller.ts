import { Controller, Res, Get } from "@nestjs/common";
import { Response } from "express";

import { ConfigService } from "../../service/config";

@Controller()
export class EnvironmentController {
  constructor(public config: ConfigService) {}

  @Get("env")
  public getEnvironment(@Res() res: Response) {
    res
      .status(200)
      .json({
        cieAppSite: this.config.appEnv().cieAppSite || "",
        cieServer: this.config.appEnv().cieServer || "",
        userAuthServer: this.config.appEnv().userAuthServer || "",
      })
      .end();
  }

  @Get("hello-world")
  public getConditionMonitoring(@Res() res: Response) {
    res.status(200).json({ status: 200, message: "Goood!!" }).end();
  }
}
