import { Module } from "@nestjs/common";
import { EnvironmentModule } from "./environment";
import { StoresControllerModule } from "./stores";
// -------------------------------------

@Module({
  imports: [EnvironmentModule, StoresControllerModule],
})
export class RestControllerModule {}
