import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Option1Component,
    Option2Component,
    Option3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
