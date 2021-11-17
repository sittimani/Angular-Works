import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorComponent } from './core/components/internal-server-error/internal-server-error.component';
import { HeroListComponent } from './hero/components/hero-list/hero-list.component';
import { HeroRegisterComponent } from './hero/components/hero-register/hero-register.component';
import { HeroResolver } from './hero/shared/resolver/hero.resolver';
import { VillanListComponent } from './villan/components/villan-list/villan-list.component';

const routes: Routes = [
  {
    path: "hero-list",
    component: HeroListComponent,
    resolve: {
      hero: HeroResolver
    }
  },
  {
    path: "hero-register",
    component: HeroRegisterComponent
  },
  {
    path: "villan-list",
    component: VillanListComponent
  },
  {
    path: "internal-server-error",
    component: InternalServerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
