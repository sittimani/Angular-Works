import { Injectable } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { concatAll, map, share, startWith, switchAll, take, tap, withLatestFrom } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor() { }

  concatAllOperator() {
    const dataOne = of(1, 2, 3)
    const data = dataOne.pipe(
      map(x => interval(1000).pipe(take(4)))
    )
    return data.pipe(concatAll())
  }

  switchAllOperator() {
    const clicks = fromEvent(document, 'click').pipe(tap(() => console.log('click')));
    const source = clicks.pipe(
      map((ev) => interval(1000).pipe(
        take(5)
      )));
    return source.pipe(
      switchAll()
    )
  }

  startsWithOperator() {
    return of(1, 2, 3).pipe(
      startWith("numbers are")
    )
  }

  withLatestFromOperator() {
    const clicks = fromEvent(document, 'click');
    const timer = interval(1000);
    return clicks.pipe(withLatestFrom(timer));
  }

}

