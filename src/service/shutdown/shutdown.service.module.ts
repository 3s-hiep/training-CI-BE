import { Module } from "@nestjs/common";

import { ShutdownService } from "./shutdown.service";

@Module({
  imports: [],
  providers: [ShutdownService],
  exports: [ShutdownService],
})
export class ShutdownServiceModule {}
