import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ListComponent,
    RegisterComponent
  ]
})
export class CoreModule { }
