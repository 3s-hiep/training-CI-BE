// from process env
export interface IEnv {
  API_ENDPOINT_PUBLICKEYS?: string;
  API_ENDPOINT_LOGIN?: string;
  API_ENDPOINT_TOKEN?: string;
  API_ENDPOINT_USER_INFO?: string;
  API_ENDPOINT_APPLICATION_FIRST_LOGIN?: string;
  API_ENDPOINT_CHANGE_PASSWORD?: string;
  API_ENDPOINT_LOGOUT?: string;
}

export class APIEndpointEnvironment {
  public publickeys = "";
  public login = "";
  public token = "";
  public userInfo = "";
  public applicationFirstLogin = "";
  public changePassword = "";
  public logout = "";
  constructor(env: IEnv = process.env) {
    this.publickeys = env.API_ENDPOINT_PUBLICKEYS || this.publickeys;
    this.login = env.API_ENDPOINT_LOGIN || this.login;
    this.token = env.API_ENDPOINT_TOKEN || this.token;
    this.userInfo = env.API_ENDPOINT_USER_INFO || this.userInfo;
    this.applicationFirstLogin = env.API_ENDPOINT_APPLICATION_FIRST_LOGIN || this.applicationFirstLogin;
    this.changePassword = env.API_ENDPOINT_CHANGE_PASSWORD || this.changePassword;
    this.logout = env.API_ENDPOINT_LOGOUT || this.logout;
  }
}
