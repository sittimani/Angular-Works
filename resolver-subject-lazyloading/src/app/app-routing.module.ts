import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/components/register/register.component';
import { AuthGuard } from './core/shared/guard/auth.guard';
import { DataResolver } from './core/shared/resolver/data.resolver';
import { ChildComponent } from './guard-resolver/components/child/child.component';
import { VillianComponent } from './guard-resolver/components/villian/villian.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "villian",
    component: VillianComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: DataResolver
    },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        component: ChildComponent
      }
    ]
  },
  {
    path: "lazyload",
    loadChildren: () => import("./second/second.module").then(module => module.SecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
