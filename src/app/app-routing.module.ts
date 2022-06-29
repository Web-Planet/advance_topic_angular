import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReactiveComponent} from './reactive-form/reactive-form.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'template-driven', loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule)},
  {path: 'reactive', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
