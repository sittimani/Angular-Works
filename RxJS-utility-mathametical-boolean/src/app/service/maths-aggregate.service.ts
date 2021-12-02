import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { count, max, min, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MathsAggregateService {

  constructor() { }

  countOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      count(n => n % 3 === 0)
    )
  }

  maxOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      max()
    )
  }

  minOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      min()
    )
  }

  reduceOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      reduce((a, b) => a + b)
    )
  }
}
