import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guard/auth.guard';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { EmployerListComponent } from './employer/components/employer-list/employer-list.component';
import { LoginComponent } from './user-management/components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }, 
  {
    path: "employer-list",
    component: EmployerListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee-list",
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
