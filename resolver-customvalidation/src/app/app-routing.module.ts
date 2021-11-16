import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero/components/hero-list/hero-list.component';
import { HeroRegisterComponent } from './hero/components/hero-register/hero-register.component';
import { HeroResolver } from './hero/shared/resolver/hero.resolver';

const routes: Routes = [
  {
    path: "",
    component: HeroListComponent,
    resolve: {
      hero: HeroResolver
    }
  },
  {
    path: "hero-register",
    component: HeroRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
