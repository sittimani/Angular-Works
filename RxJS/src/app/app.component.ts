import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';
import { CallbackService } from './services/callback.service';
import { AjaxService } from './services/ajax.service';
import { from, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { TransformService } from './services/transform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS';

  constructor(
    private observableService: ObservableService,
    private callbackService: CallbackService,
    private ajaxService: AjaxService,
    private transformService: TransformService
  ) { }

  createCancatMap() {
    this.transformService.createConcatMap().subscribe(observer => {
      console.log(observer);

    })
  }

  createCallback() {
    this.callbackService.asyncCallback()
  }

  makeCall() {
    this.ajaxService.makeAjaxCall().subscribe(result => {
      console.log(result);
    })
  }

  createEmptyObservable() {
    this.observableService.createEmptyObservable().subscribe(observer => {
      console.log(observer);
    })
  }

  createFromObservable() {
    this.observableService.createFromObservable().subscribe(observer => {
      console.log(observer);
    })
  }

  createIntervalObservable() {
    this.observableService.createIntervalObservable().subscribe(observer => {
      console.log(observer);
    })
  }

  createiifObservable() {
    this.observableService.createiifObservable().subscribe(observer => {
      console.log(observer);
    })
  }

  createMap() {
    this.transformService.createMap().subscribe(observer => {
      console.log(observer);
    })
  }

  createMapTo() {
    this.transformService.createMapTo().subscribe(observer => {
      console.log(observer);
    })
  }

  createMergeMap() {
    this.transformService.createMergeMap().subscribe(observer => {
      console.log(observer);
    })
  }

  createScan() {
    this.transformService.createScan().subscribe(observer => {
      console.log(observer);
    })
  }

  createSwitchedMap() {
    this.transformService.createSwitchedMap().subscribe(observer => {
      console.log(observer)
    })
  }
}
