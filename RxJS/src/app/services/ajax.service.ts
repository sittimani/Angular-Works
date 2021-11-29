import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() { }

  makeAjaxCall() {
    return ajax({
      method: "POST",
      url: "http://localhost:3000/post",
      body: {
        name: "manikandan"
      }
    })
  }
}
