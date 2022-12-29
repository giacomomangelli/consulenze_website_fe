import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { HomeComponent } from './banners/home/home.component';
import { ProductsComponent } from './banners/products/products.component';
import { ContactComponent } from './banners/contact/contact.component';
const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'landing',
    redirectTo: '',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
