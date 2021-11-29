import { Injectable } from '@angular/core';
import { empty, from, generate, iif, interval, of } from 'rxjs';
import { startWith, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  createEmptyObservable() {
    const data = empty().pipe(startWith("Hello world"))
    return data
  }

  createFromObservable() {
    const data = [1, 2, 3, 4, 5]
    return from(data)
  }

  createIntervalObservable() {
    return interval(1000).pipe(take(3))
  }

  createiifObservable() {
    const isTrue = false
    return iif(() => isTrue, of(true), of(false))
  }
}
