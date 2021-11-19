import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NameDirective } from '../core/validators/name.directive';
import { EmailDirective } from '../core/validators/email.directive';
import { MismatchDirective } from '../core/validators/mismatch.directive';



@NgModule({
  declarations: [
    FormComponent,
    NameDirective,
    EmailDirective,
    MismatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    FormComponent
  ]
})
export class HumanModule { }
