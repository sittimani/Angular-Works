import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MulticastingService {

  constructor() { }

  shareOperator() {
    return interval(1000).pipe(
      map(x => x * x),
      share()
    )
  }
}
