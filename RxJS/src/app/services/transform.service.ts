import { Injectable } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, map, mapTo, mergeMap, scan, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  createConcatMap() {
    return from([1, 2, 3]).pipe(
      concatMap(x => of(x * 2))
    )
  }

  createMap() {
    return from([1, 2, 3, 4, 5, 6]).pipe(
      map(x => x * 3)
    )
  }

  createMapTo() {
    return from([1, 2, 3, 4, 5, 6]).pipe(
      mapTo("Hi")
    )
  }

  createMergeMap() {
    return from([1, 2, 3, 4, 5]).pipe(
      mergeMap(x => interval(1000).pipe(
        map(y => x + "- hi"),
        take(1)
      ))
    )
  }

  createScan() {
    const numbers = of(1, 2, 3);
    return numbers.pipe(
      scan((a, b) => a + b)
    )
  }

  createSwitchedMap() {
    return of(1, 2, 3).pipe(
      switchMap((x: number) => of(x, x ** 2, x ** 3))
    )
  }
}
