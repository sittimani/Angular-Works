import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [ 
  {
    path: "first",
    component: FirstComponent
  },
  {
    path: "second",
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
    errorHandler: errorHandler
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
function errorHandler(error: any) {
  console.log("error in navigating");
}

