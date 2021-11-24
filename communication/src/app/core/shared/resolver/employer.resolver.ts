import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employer } from 'src/app/employer/shared/interface/employer.interface';
import { EmployerService } from 'src/app/employer/shared/service/employer.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerResolver implements Resolve<Employer[]> {

  constructor(private employerService: EmployerService) { }

  resolve(): Observable<Employer[]> {
    return of(this.employerService.getEmployers());
  }
}
