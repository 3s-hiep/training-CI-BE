import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RestControllerModule } from "./controllers/rest-controller.module";
import { typeOrmConfig } from "./domain/typeorm.config";
import { ConfigServiceModule } from "./service/config";
import { ShutdownServiceModule } from "./service/shutdown/shutdown.service.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigServiceModule,
    ShutdownServiceModule,
    RestControllerModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
})
export class AppModule { }
