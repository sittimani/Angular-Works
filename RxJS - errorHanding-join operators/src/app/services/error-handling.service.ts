import { Injectable } from '@angular/core';
import { interval, of, throwError, timer } from 'rxjs';
import { catchError, delayWhen, map, retry, retryWhen, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  catchErrorOperator() {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      map(x => {
        if (x === 5) {
          throw "Five"
        }
        return x
      }),
      catchError(error => {
        return throwError(error)
      })
    )
  }

  retryOperator() {
    return of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      map(x => {
        if (x === 3)
          throw "Three"
        return x
      }),
      catchError(error => {
        return throwError(error)
      }),
      retry(3)
    )
  }

  retryWhenOperator() {
    return interval(1000).pipe(
      map(val => {
        if (val > 5) {
          throw val;
        }
        return val;
      }),
      retryWhen(errors =>
        errors.pipe(
          tap(val => console.log(`Value ${val} was too high!`)),
          delayWhen(val => timer(val * 1000))
        )
      ))
  }
}
