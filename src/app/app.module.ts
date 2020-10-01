import { CustomPipe } from './custom.pipe';
import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {headerComponent} from './header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './auth/users/users.component'
import { EmployeeModule } from './employee/employee.module';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CustomDirective } from './custom.directive';
import { Custom1Directive } from './custom1.directive';
import { EmailComponent } from './email/email.component';
import { Register1Component } from './register1/register1.component';
import { CountryComponent } from './country/country.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    PagenotfoundComponent,
    HtmlComponent,
    JavascriptComponent,
    CustomDirective,
    Custom1Directive,
    EmailComponent,
    Register1Component,
    CountryComponent,
    HttpdataComponent,
    CustomPipe,
    FilterPipe

  ],
  imports: [
    BrowserModule,EmployeeModule,
    ReactiveFormsModule,
    FormsModule,RouterModule.forRoot([
    { path:'',component:HomeComponent},
    { path:'html',component:HtmlComponent},
    {path:'javascript',component:JavascriptComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'email',component:EmailComponent},
    { path:'**',component:PagenotfoundComponent}
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
