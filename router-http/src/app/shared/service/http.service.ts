import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverAddress = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getMethod() {
    return this.http.get(`${this.serverAddress}getData`, {
      headers: {
        Authorization: "abc"
      }
    })
  }

  getMethodAsResponse() {
    return this.http.get(`${this.serverAddress}getData`, {
      observe: "response",
      headers: {
        Authorization: "abc"
      }
    })
  }
}

/*
  observe by default return json format
  observe response return as HTTPResponse object

  Headers also can be seperatly added for each request
*/