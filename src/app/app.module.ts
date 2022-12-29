import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './banners/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './banners/contact/contact.component';
import { ProductsComponent } from './banners/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './banners/team/team.component';
import { TechnologiesComponent } from './banners/technologies/technologies.component'



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    TeamComponent,
    TechnologiesComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
