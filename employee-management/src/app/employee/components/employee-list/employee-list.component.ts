import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/interface/employee.interface';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  headers = ["name", "team", "mailId"]
  items!: Employee[]

  constructor(private employeeService: EmployeeService) {
    this.items = this.employeeService.getEmployees()
  }

  ngOnInit(): void {
  }

  delete(index: number) {
    console.log(index);
    
    this.employeeService.removeEmployee(index)
  }

}
