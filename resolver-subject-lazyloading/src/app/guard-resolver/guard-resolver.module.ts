import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillianComponent } from './components/villian/villian.component';
import { ChildComponent } from './components/child/child.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VillianComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    VillianComponent, 
    ChildComponent
  ]
})
export class GuardResolverModule { }
