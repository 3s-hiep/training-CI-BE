import { Module } from "@nestjs/common";
import { EnvironmentModule } from "./environment";
import { StoresControllerModule } from "./stores";
import { UsersControllerModule } from './users/users.controller.module';
// -------------------------------------

@Module({
  imports: [EnvironmentModule, StoresControllerModule, UsersControllerModule],
})
export class RestControllerModule { }
