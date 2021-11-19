import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { UnauthorizedComponent } from './core/shared/components/unauthorized/unauthorized.component';
import { ListComponent } from './hero/components/list/list.component';
import { ListComponent as VillianListComponent } from './villain/components/list/list.component';

import { RegisterComponent } from './hero/components/register/register.component';
import { FormComponent } from './human/components/form/form.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "hero",
    component: ListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        canDeactivate: [AuthGuard],
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "villian",
    component: VillianListComponent,
    canLoad: [AuthGuard]
  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
