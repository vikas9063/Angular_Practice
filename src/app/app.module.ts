import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VkyComponent } from './vky/vky.component';

import { BookModule } from './books/book.module';
import { CartComponent } from './cart/cart.component';
import { NavbarcomComponent } from './navbarcom/navbarcom.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VkyComponent,
    CartComponent,
    NavbarcomComponent,
    RegisterComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    HttpClientModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
