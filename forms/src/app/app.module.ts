import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormvalidationComponent } from './components/formvalidation/formvalidation.component';
import { TemplaeFormComponent } from './components/templae-form/templae-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormvalidationComponent,
    TemplaeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
