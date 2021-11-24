import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/employee/shared/interface/employee.interface';
import { EmployeeService } from 'src/app/employee/shared/service/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<Employee[]> {

  constructor(private employeeService: EmployeeService) { }

  resolve(): Observable<Employee[]> {
    return of(this.employeeService.getEmployees())
  }
}
