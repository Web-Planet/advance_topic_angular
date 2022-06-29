import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormTComponent } from './template-driven/form-t/form-t.component';
import { DetailTComponent } from './template-driven/detail-t/detail-t.component';
import { FormRComponent } from './reactive/form-r/form-r.component';
import { DetailRComponent } from './reactive/detail-r/detail-r.component';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    FormTComponent,
    DetailTComponent,
    FormRComponent,
    DetailRComponent,
    HomeComponent,
    WildCardComponent
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
