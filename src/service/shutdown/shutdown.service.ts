import { Injectable, OnApplicationShutdown, INestApplication } from "@nestjs/common";

import { Subject, combineLatest, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable()
export class ShutdownService implements OnApplicationShutdown {
  private shutDowning = false;
  private shutdownListener$: Subject<void> = new Subject();

  constructor() {}

  // This function picks up SIGNAL about stopping this app when the SIGNAL emitted. For example, SIGTERM, SIGINT, SIGKILL.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onApplicationShutdown(signal: string) {
    if (!this.shutDowning) {
      this.shutDowning = true;
      this.shutdownListener$.next();
    }
  }

  // It is required that executing this function with app.close in main.ts
  public configureGracefulShutdown(shutdownFn: () => Observable<any> | Promise<any>) {
    this.shutdownListener$.pipe(mergeMap(() => shutdownFn())).subscribe({
      next: () => {
        process.exit(0);
      },
      error: () => {
        process.exit(1);
      },
    });
  }

  public teardown$(app: INestApplication): Observable<any> {
    return combineLatest(app.close());
  }
}
