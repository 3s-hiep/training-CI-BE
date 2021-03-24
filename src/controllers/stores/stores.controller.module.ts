import { Module } from "@nestjs/common";

import { StoresController } from "./stores.controller";

@Module({
  controllers: [StoresController],
  imports: [],
})
export class StoresControllerModule {}
