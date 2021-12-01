import { Component } from '@angular/core';
import { ErrorHandlingService } from './services/error-handling.service';
import { JoinService } from './services/join.service';
import { MulticastingService } from './services/multicasting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-Multicasting-errorhandling';

  constructor(
    private joinService: JoinService,
    private multicastingService: MulticastingService,
    private errorHandlingService: ErrorHandlingService
  ) { }

  concatAll() {
    this.joinService.concatAllOperator().subscribe(observer => {
      console.log(observer);
    })
  }

  switchAllOperator() {
    this.joinService.switchAllOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  startWithOperator() {
    this.joinService.startsWithOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  withLatestFromOperator() {
    this.joinService.withLatestFromOperator().subscribe(observer => {
      console.log(observer)
    })
  }

  shareOperator() {
    const observer = this.multicastingService.shareOperator().subscribe(observer => {
      console.log(`subscription 1: ${observer}`)
    })
    this.multicastingService.shareOperator().subscribe(observer => {
      console.log(`subscription 2: ${observer}`)
    })

    setTimeout(() => {
      observer.unsubscribe()
    }, 2000)

    setTimeout(() => {
      this.multicastingService.shareOperator().subscribe(observer => {
        console.log(`subscription 1: ${observer}`)
      })
    }, 5000)
  }

  catchErrorOperator() {
    this.errorHandlingService.catchErrorOperator().subscribe(observer => {
      console.log(observer)
    }, 
    error => console.log(`error ${error}`))
  }

  retryOperator() {
    this.errorHandlingService.retryOperator().subscribe(observer => {
      console.log(observer);
    }, error => {
      console.log(`error ${error}`);
    })
  }

  retryWhenOperator() {
    this.errorHandlingService.retryWhenOperator().subscribe(observer => {
      console.log(observer)
    },
    error => console.log(`error: ${error}`))
  }
}
