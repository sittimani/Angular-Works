import { Injectable } from '@angular/core';
import { combineLatest, concat, interval, of, partition, race, range, zip } from 'rxjs';
import { map, skip, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JoinCreationService {

  constructor() { }

  combineLatestOperator() {
    const valueOne = of(5)
    const valueTwo = of(2, 4, 6, 8)

    return combineLatest([valueOne, valueTwo]).pipe(
      map(([v1, v2]) => {
        return v1 * v2
      })
    )
  }

  concatOperator() {
    return concat(range(2, 2), range(1, 5))
  }

  partitionOperator() {
    return partition(of(1, 2, 3, 4, 5), (value, index) => {
      return value % 2 === 0
    })
  }

  raceOperator() {
    return race(
      of(1, 2, 3),
      of(4, 5, 6),
      of(7, 8, 9)
    )
  }

  zipOperator() {
    return zip(
      of("manikandan", "yasin"),
      of("MEAN", "Django")
    ).pipe(
      map(([name, team]) => ({name, team}))
    )
  }
}
