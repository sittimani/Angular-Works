import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GuardResolverModule } from './guard-resolver/guard-resolver.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    GuardResolverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
