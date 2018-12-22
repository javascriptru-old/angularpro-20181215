import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, flatMap} from "rxjs/operators";

export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        return of(true).pipe(delay(5000), flatMap(() => load()));
    };
}
