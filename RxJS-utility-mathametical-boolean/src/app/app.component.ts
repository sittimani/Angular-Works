import { Component } from '@angular/core';
import { animationFrameScheduler, interval } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { ConditionalBooleanService } from './service/conditional-boolean.service';
import { MathsAggregateService } from './service/maths-aggregate.service';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-utility-mathametical-boolean';

  constructor(
    private utilityService: UtilityService,
    private conditionalService: ConditionalBooleanService,
    private mathsService: MathsAggregateService
  ) { }

  tapOperator() {
    this.utilityService.tapOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  delayOperator() {
    console.log("Result will arrived at 5 sec");

    this.utilityService.delayOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  delayWhenOperator() {
    this.utilityService.delayWhenOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  materializeOperator() {
    this.utilityService.materializeOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  dematerializeOperator() {
    this.utilityService.dematerializeOperator().subscribe(observer => {
      console.log(observer);
    })
  }

  suberscribeOnOperator() {
    this.utilityService.subscribeOnOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  timeIntervalOperator() {
    this.utilityService.timeIntervalOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  timestampOperator() {
    this.utilityService.timestampOperator().subscribe(console.log)
  }

  timeOutOperator() {
    this.utilityService.timeOutOperator().subscribe(observer => {
      console.log
    }, error => {
      console.log(`error: ${error.message}`);
    })
  }

  toArrayOperator() {
    this.utilityService.toArrayOperator().subscribe(console.log)
  }

  everyOperator() {
    this.conditionalService.everyOperator().subscribe(console.log)
  }

  findOperator() {
    this.conditionalService.findOperator().subscribe(console.log)
  }

  findIndexOperator() {
    this.conditionalService.findIndexOperator().subscribe(console.log)
  }

  isEmpatyOperator() {
    this.conditionalService.isEmptyOperator().subscribe(console.log)
  }

  countOperator() {
    this.mathsService.countOperator().subscribe(console.log)
  }

  maxOperator() {
    this.mathsService.maxOperator().subscribe(console.log)
  }

  minOperator() {
    this.mathsService.minOperator().subscribe(console.log)
  }

  reduceOperator() {
    this.mathsService.reduceOperator().subscribe(console.log)
  }
}
