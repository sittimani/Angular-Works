import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    {
      name: "mani",
      team: "MEAN",
      mailId: "manikandan.sasikumar@aspiresys.com"
    },
    {
      name: "yasin",
      team: "Django",
      mailId: "mohamed.mohamed@aspiresys.com"
    }
  ]

  constructor() { }

  public setEmployee(data: Employee) {
    this.employees.push(data)
  }

  public getEmployees() {
    return this.employees
  }

  public removeEmployee(index: number) {
    this.employees.splice(index, 1)
    console.log(this.employees);

  }
}
