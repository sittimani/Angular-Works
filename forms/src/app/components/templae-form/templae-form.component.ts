import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templae-form',
  templateUrl: './templae-form.component.html',
  styleUrls: ['./templae-form.component.css']
})
export class TemplaeFormComponent implements OnInit {

  model:any = {}
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
