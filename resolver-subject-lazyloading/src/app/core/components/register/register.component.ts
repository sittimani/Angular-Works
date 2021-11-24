import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroList } from 'src/app/core/shared/interface/hero.interface';
import { DataService } from 'src/app/core/shared/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: HeroList = {
    name: '',
    power: '',
    movie: ''
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataService.triggerData(this.model)
    this.model = {
      name: '',
      power: '',
      movie: ''
    }
  }

}
