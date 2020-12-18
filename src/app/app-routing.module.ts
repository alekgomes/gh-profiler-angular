import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';

import {SearchComponent} from './component/search-component/search-component.component'

const routes: Routes = [
  {path: 'home', component: SearchComponent },
  {path: 'about', component: AboutComponent},
  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
