import { Injectable } from '@angular/core';
import { fromEvent, interval, of, range, throwError } from 'rxjs';
import { audit, catchError, debounce, distinct, distinctUntilKeyChanged, elementAt, filter, first, last, scan, single, skip, skipLast, skipWhile, take, takeLast, takeUntil, takeWhile, throttle } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  data = of(1, 2, 3, 4, 5)

  constructor() { }

  auditFilter() {
    const clicks = fromEvent(document, 'click');
    return clicks.pipe(audit(event => interval(3000)));
  }

  distinctFilter() {
    return of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5).pipe(
      distinct()
    )
  }

  debounceFilter() {
    const clicks = fromEvent(document, 'click');
    return clicks.pipe(
      scan((i) => ++i, 1),
      debounce((i) => interval(200 * i))
    );
  }

  distinctUntilKeyChangeFilter() {
    return of(
      { name: "manikandan", team: "MEAN" },
      { name: "yasin", team: "MEAN" },
      { name: "joker", team: "MERN" }
    ).pipe(
      distinctUntilKeyChanged("team")
    )
  }

  elementAtFilter() {
    return of(
      { name: "manikandan", team: "MEAN" },
      { name: "yasin", team: "MEAN" },
      { name: "joker", team: "MERN" }
    ).pipe(
      elementAt(0)
    )
  }

  filterFilter() {
    return this.data.pipe(
      filter(x => x % 2 === 0)
    )
  }

  firstFilter() {
    return this.data.pipe(
      first(x => x % 3 === 0)
    )
  }

  lastFilter() {
    return this.data.pipe(
      last(x => x % 2 === 0, "not found")
    )
  }

  singleFilter() {
    return of(
      { name: "manikandan" },
      { name: "manikandan" },
      { name: "yasin" }
    ).pipe(
      single(object => object.name.startsWith("m"))
    )
  }

  skipFilter() {
    return range(1, 10).pipe(
      skipWhile((skip, x) => {
        return x !== 5
      })
    )
  }

  takeFilter() {
    return of(1,2,3,4,5,2,1).pipe(
      takeWhile(x => x < 4)
    )
  }

  throttleFilter() {
    return range(1,100).pipe(
      throttle(ev => interval(100))
    )
  } 
}
