// from process env
export interface IEnv {
  PORT?: string;
  CIE_APP_SITE?: string;
  CIE_SERVER?: string;
  USER_AUTH_SERVER?: string;
  REDIS_SERVER?: string;
  REDIS_PORT?: string;
  REDIS_DB?: string;
  REDIS_USER_NAME?: string;
  REDIS_PASSWORD?: string;
  REDIS_TTL?: string;
  SESSION_DOMAIN?: string;
  SESSION_SECRET?: string;
  SESSION_PROXY?: string;
  SESSION_HTTP_ONLY?: string;
  SESSION_SECURE?: string;
  SESSION_SAME_SITE?: string;
  PRODUCTION?: string;
}

export class AppEnvironment {
  public port = 3000;
  public cieAppSite = "http://localhost:4200";
  public cieServer = "http://localhost:3100";
  public userAuthServer = "http://localhost:3200";
  public redisServer = "localhost";
  public redisPort = 6379;
  public redisDB = 0;
  public redisUserName = "";
  public redisPassword = "";
  public redisTtl = 1800;
  public sessionDomain = "localhost";
  public sessionSecret = "GLORY LTD.";
  public sessionProxy = false;
  public sessionHttpOnly = false;
  public sessionSecure: "auto" | boolean = false;
  public sessionSameSite: "lax" | "strict" | "none" | boolean = false;
  public production = true;

  constructor(env: IEnv = process.env) {
    this.port = Number(env.PORT || this.port);
    this.cieAppSite = env.CIE_APP_SITE || this.cieAppSite;
    this.cieServer = env.CIE_SERVER || this.cieServer;
    this.userAuthServer = env.USER_AUTH_SERVER || this.userAuthServer;
    this.redisServer = env.REDIS_SERVER || this.redisServer;
    this.redisPort = Number(env.REDIS_PORT || this.redisPort);
    this.redisDB = Number(env.REDIS_DB || this.redisDB);
    this.redisTtl = Number(env.REDIS_TTL || this.redisTtl);
    this.redisUserName = env.REDIS_USER_NAME || this.redisUserName;
    this.redisPassword = env.REDIS_PASSWORD || this.redisPassword;
    this.sessionDomain = env.SESSION_DOMAIN || this.sessionDomain;
    this.sessionSecret = env.SESSION_SECRET || this.sessionSecret;
    this.sessionProxy = env.SESSION_PROXY === "true" ? true : env.SESSION_PROXY === "false" ? false : this.sessionProxy;
    this.sessionHttpOnly = env.SESSION_HTTP_ONLY === "true" ? true : env.SESSION_HTTP_ONLY === "false" ? false : this.sessionHttpOnly;
    this.sessionSecure =
      env.SESSION_SECURE === "true"
        ? true
        : env.SESSION_SECURE === "false"
        ? false
        : env.SESSION_SECURE === "auto"
        ? "auto"
        : this.sessionSecure;
    this.sessionSameSite =
      env.SESSION_SAME_SITE === "true"
        ? true
        : env.SESSION_SAME_SITE === "false"
        ? false
        : env.SESSION_SAME_SITE === "strict"
        ? "strict"
        : env.SESSION_SAME_SITE === "lax"
        ? "lax"
        : env.SESSION_SAME_SITE === "none"
        ? "none"
        : this.sessionSameSite;
    this.production = env.PRODUCTION === "true" ? true : env.PRODUCTION === "false" ? false : this.production;
  }
}
