import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FormvalidationComponent } from './components/formvalidation/formvalidation.component';
import { TemplaeFormComponent } from './components/templae-form/templae-form.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "validation-form",
    component: FormvalidationComponent
  }, 
  {
    path: "template-form",
    component: TemplaeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
