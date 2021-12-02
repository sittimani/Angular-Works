import { Injectable } from '@angular/core';
import { interval, of, Notification, animationFrameScheduler, asyncScheduler, merge, queueScheduler } from 'rxjs';
import { delay, delayWhen, dematerialize, map, materialize, observeOn, subscribeOn, take, tap, timeInterval, timeout, timestamp, toArray } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  tapOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      tap(console.log),
      map(x => x < 3 ? "Small" : "Big")
    )
  }

  delayOperator() {
    return of(1, 2, 3, 4).pipe(
      delay(5000)
    )
  }

  delayWhenOperator() {
    return of(1, 2, 3, 4).pipe(
      delayWhen(e => interval(5000)
      )
    )
  }

  materializeOperator() {
    const letters = of('a', 'b', 13, 'd');
    const upperCase = letters.pipe(map((x: any) => x.toUpperCase()));
    return upperCase.pipe(materialize());
  }

  dematerializeOperator() {
    const notifA = new Notification('N', 'A');
    const notifB = new Notification('N', 'B');
    const notifC = new Notification('N', 'C');
    const notifE = new Notification("E", undefined, new TypeError("not defined"));
    const materialized = of(notifA, notifB, notifC, notifE);
    return materialized.pipe(<any>dematerialize());
  }

  subscribeOnOperator() {
    const data = of(1, 2, 3).pipe(subscribeOn(asyncScheduler))
    const secondData = of(4, 5, 6)
    return merge(data, secondData)
  }

  timeIntervalOperator() {
    const seconds = interval(500)
    return seconds.pipe(timeInterval())
  }

  timestampOperator() {
    return of(1, 2, 3).pipe(
      delay(2000),
      timestamp()
    )
  }

  timeOutOperator() {
    return interval(1000).pipe(
      timeout(500)
    )
  }

  toArrayOperator() {
    return interval(1000).pipe(
      take(10),
      toArray()
    )
  }
}
