import { Component, OnInit } from '@angular/core';
import { Employer } from '../../shared/interface/employer.interface';
import { EmployerService } from '../../shared/service/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employerList: Employer[] = []

  headers = ["name", "email", "team", "experience"]
  items!: Employer[]

  constructor(private employerService: EmployerService) {
    this.items = this.employerService.getEmployers()
  }

  ngOnInit(): void {
  }

}
