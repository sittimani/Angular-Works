import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillanListComponent } from './components/villan-list/villan-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    VillanListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VillanModule { }
