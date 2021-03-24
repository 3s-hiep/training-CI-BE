import { Injectable } from "@nestjs/common/decorators";

import { AppEnvironment } from "../../environment/app";
import { APIEndpointEnvironment } from "../../environment/api-endpoint";

@Injectable()
export class ConfigService {
  private readonly app: AppEnvironment;
  private readonly apiEndpoint: APIEndpointEnvironment;

  public constructor() {
    this.app = new AppEnvironment();
    this.apiEndpoint = new APIEndpointEnvironment();
  }

  public appEnv(): AppEnvironment {
    return this.app;
  }

  public apiEndpointEnv(): APIEndpointEnvironment {
    return this.apiEndpoint;
  }
}
