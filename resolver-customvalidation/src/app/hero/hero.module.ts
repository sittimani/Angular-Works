import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroRegisterComponent } from './components/hero-register/hero-register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeroListComponent,
    HeroRegisterComponent
  ]
})
export class HeroModule { }
