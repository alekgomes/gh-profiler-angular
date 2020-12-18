import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent, loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule) },
  {path: 'about', component: AboutComponent},
  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
