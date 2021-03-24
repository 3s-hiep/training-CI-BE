import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { ConfigServiceModule } from "./service/config";
import { ShutdownServiceModule } from "./service/shutdown/shutdown.service.module";

import { RestControllerModule } from "./controllers/rest-controller.module";

@Module({
  imports: [ConfigModule.forRoot(), ConfigServiceModule, ShutdownServiceModule, RestControllerModule],
})
export class AppModule {}
