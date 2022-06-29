import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {WildCardComponent} from './wild-card/wild-card.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'template', component: TemplateDrivenComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: '**', component: WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
