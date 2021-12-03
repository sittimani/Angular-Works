import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverAddress } from 'src/environments/environment.prod';
import { catchError, delay, retry, tap, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverAddress = serverAddress

  constructor(private http: HttpClient) { }

  getRequest() {
    return this.http.get(`${serverAddress}get-heros`).pipe(
      delay(750),
      timeout(1000),
      retry(3),
      tap(()=> console.log("Hero List")),
      catchError(error => {
        return throwError(error)
      })
    )
  }

  postRequest(body: any) {
    return this.http.post(`${serverAddress}add-hero`, body, {
      headers: {
        Authorization: "123"
      }
    })
  }

  putRequest(body: any) {
    return this.http.put(`${serverAddress}modify-hero`, body)
  }

  deleteRequest(id: string) {
    return this.http.delete(`${serverAddress}delete-hero/${id}`)
  }
}
