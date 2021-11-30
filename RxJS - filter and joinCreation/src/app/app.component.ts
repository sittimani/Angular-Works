import { Component } from '@angular/core';
import { FilterService } from './services/filter.service';
import { JoinCreationService } from './services/join-creation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-filter-joincreation';

  constructor(
    private filterService: FilterService,
    private joinService: JoinCreationService
  ) { }

  auditFilter() {
    this.filterService.auditFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  distinctFilter() {
    this.filterService.distinctFilter().subscribe(observer => {
      console.log(observer);
    })
  }

  distinctKeyFilter() {
    this.filterService.distinctUntilKeyChangeFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  elementAtFilter() {
    this.filterService.elementAtFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  filterFilter() {
    this.filterService.filterFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  firstFilter() {
    this.filterService.firstFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  lastFilter() {
    this.filterService.lastFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  singleFilter() {
    this.filterService.singleFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  skipFilter() {
    this.filterService.skipFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  takeFilter() {
    this.filterService.takeFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  throttleFilter() {
    this.filterService.throttleFilter().subscribe(observer => {
      console.log(observer)
    })
  }

  combineLatestOperator() {
    this.joinService.combineLatestOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  concatOperator() {
    this.joinService.concatOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  partitionOperator() {
    const [odd$, even$] = this.joinService.partitionOperator()
    console.log("Even Values")
    odd$.subscribe(value => {
      console.log(value);
    })
    console.log("Odd Values")
    even$.subscribe(value => {
      console.log(value);
    })
  }

  raceOperator() {
    this.joinService.raceOperator().subscribe(observer => {
      console.log(observer);
    })
  }
  
  zipOperator() {
    this.joinService.zipOperator().subscribe(observer => {
      console.log(observer);
    })
  }
}
