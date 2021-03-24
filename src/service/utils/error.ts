export class CIEBackendError {
  constructor(public code: number, public message: string, public originalError?: any) {}
  public readonly name = CIEBackendError.name;

  public static isCIEBackendError(err: any): err is CIEBackendError {
    return !!err && err.name === CIEBackendError.name && typeof err.code === "number" && typeof err.message === "string";
  }

  public toString(): string {
    return `${this.name}: ${this.code} ${this.message}`;
  }
}

export class ErrorCode {
  public static readonly BAD_REQUEST = 400;
  public static readonly UNAUTHORIZED = 401;
  public static readonly FORBIDDEN = 403;
  public static readonly NOT_FOUND = 404;
  public static readonly CONFLICT = 409;
  public static readonly INTERNAL = 500;

  public static categorize(err: any): CIEBackendError {
    if (CIEBackendError.isCIEBackendError(err)) {
      return err;
    }

    return new CIEBackendError(ErrorCode.INTERNAL, "Unexpected error", err);
  }
}
