import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { UnauthorizedComponent } from './core/shared/components/unauthorized/unauthorized.component';
import { HumanModule } from './human/human.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ResponseInterceptor } from './core/shared/interceptor/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    HumanModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
