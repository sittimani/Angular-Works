import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { every, find, findIndex, isEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionalBooleanService {

  constructor() { }

  everyOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      every(x => x % 2 === 0)
    )
  }

  findOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      find(x => x % 2 === 0)
    )
  }

  findIndexOperator() {
    return of(1, 2, 3, 4, 5).pipe(
      findIndex(x => x % 3 === 0)
    )
  }

  isEmptyOperator() {
    return of().pipe(
      isEmpty()
    )
  }
}
