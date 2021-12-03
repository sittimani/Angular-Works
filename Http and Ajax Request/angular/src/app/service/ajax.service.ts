import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax'
import { serverAddress } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private serverAddress = serverAddress

  constructor() { }

  getRequest() {
    return ajax(`${serverAddress}get-heros`)
  }

  getJSONRequest() {
    return ajax.getJSON(`${serverAddress}get-heros`)
  }

  postRequest(body: any) {
    return ajax({
      url: `${serverAddress}add-hero`,
      method: "POST",
      body: body,
      headers: {
        Authorization: "123"
      }
    })
  }

  putRequest(body: any) {
    return ajax({
      url: `${serverAddress}modify-hero`,
      method: "PUT",
      body: body
    })
  }

  deleteRequest(index: string) {
    return ajax({
      url: `${serverAddress}delete-hero/${index}`,
      method: "DELETE",
    })
  }
}
