import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getMethod() {
    this.http.getMethod().subscribe(result => {
      console.log(result);
    })
  }

  getResponse() {
    this.http.getMethodAsResponse().subscribe(result => {
      console.log(result);
      
    })
  }
}
