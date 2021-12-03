import { Component } from '@angular/core';
import { AjaxService } from './service/ajax.service';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'requestMaker';

  constructor(
    private httpService: HttpService,
    private ajaxService: AjaxService
  ) { }

  getRequest() {
    this.httpService.getRequest().subscribe(response => {
      console.log(response)
    })

    this.ajaxService.getRequest().subscribe(ajaxResponse => {
      console.log(`ajax:`)
      console.log(ajaxResponse.response);
    })

    this.ajaxService.getJSONRequest().subscribe(response => {
      console.log(`ajax getJSON:`)
      console.log(response);
    })
  }

  postRequest() {
    const date = new Date().toISOString()
    const body = {
      name: `mani-${Math.round(Math.random() * 100)}`,
      power: "nothing",
      timeStamp: date
    }
    this.httpService.postRequest(body).subscribe(response => {
      console.log("http")
      console.log(response);
    })

    this.ajaxService.postRequest(body).subscribe(ajaxResponse => {
      console.log("Ajax Response")
      console.log(ajaxResponse.response);
    })
  }

  putRequest() {
    const date = new Date().toISOString()
    const body = {
      name: "mani-20",
      power: `something-${Math.round(Math.random() * 100)}`,
      timeStamp: date
    }
    this.ajaxService.putRequest(body).subscribe(ajaxResponse => {
      console.log("ajax");
      console.log(ajaxResponse.response)
    })

    this.httpService.putRequest(body).subscribe(response => {
      console.log("http");
      console.log(response)
    })
  }

  deleteRequest() {
    this.httpService.deleteRequest("RDJ").subscribe(response => {
      console.log(response)
    })

    this.ajaxService.deleteRequest("mani-38").subscribe(response => {
      console.log(response.response)
    })
  }
}
