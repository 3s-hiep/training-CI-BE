import { Controller, Get, HttpCode, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { Observable, of } from "rxjs";

@Controller("")
export class StoresController {
  constructor() {}
  @Get("/stores")
  @HttpCode(200)
  public getStores(@Req() req: Request, @Query("areaName") areaName: string): Observable<string> {
    return of("get$");
  }
}
