import { Request } from "express";

export function getTokenFromHeader(req: Request): string {
  const regexp = /^Bearer\s+/i;
  if (!req.headers.authorization || !regexp.test(req.headers.authorization)) {
    return "";
  }
  return req.headers.authorization.replace(/^Bearer\s+/i, "");
}
