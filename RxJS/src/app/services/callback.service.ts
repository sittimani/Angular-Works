import { Injectable } from '@angular/core';
import { asyncScheduler, bindCallback } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {

  constructor() { }

  asyncCallback() {
    const asyncCallBack = bindCallback(this.someFunction, asyncScheduler)
    const syncCallBack = bindCallback(this.someFunction)
    asyncCallBack().subscribe(() => {
      console.log("called async");

    })
    syncCallBack().subscribe(() => {
      console.log("called sync");

    })
    console.log("Normal message")
  }

  someFunction(cb: Function) {
    cb()
  }
}
