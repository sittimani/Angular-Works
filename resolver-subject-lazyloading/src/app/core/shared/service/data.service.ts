import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HeroList } from '../interface/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject: BehaviorSubject<HeroList>;
  public dataSubject$: Observable<HeroList>

  constructor() {
    this.dataSubject = new BehaviorSubject<HeroList>({name: "ironman", power: "brain", movie: "iron man 3"})
    this.dataSubject$ = this.dataSubject.asObservable()
  }

  triggerData(data: HeroList) {
    this.dataSubject.next(data)
  }
}
