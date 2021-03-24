import { Module } from "@nestjs/common";

import { ConfigServiceModule } from "../../service/config";

import { EnvironmentController } from "./environment.controller";

@Module({
  controllers: [EnvironmentController],
  imports: [ConfigServiceModule],
})
export class EnvironmentModule {
  constructor() {}
}
