import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ReactiveComponent} from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {FormComponent} from './template-driven/form/form.component';
import {ConfirmationComponent} from './template-driven/confirmation/confirmation.component';
import {ReactiveConfirmationComponent} from './reactive-form/confirmation/confirmation.component';
import {ReactiveFormComponent} from './reactive-form/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveComponent,
    ReactiveFormComponent,
    ReactiveConfirmationComponent,
    TemplateDrivenComponent,
    FormComponent,
    ConfirmationComponent
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
export class AppModule {
}
