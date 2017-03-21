import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";

import { RouterModule, Routes } from '@angular/router';
import { TitleModule } from "./title-module/title.module";

const routes: Routes = [
  { path: "titles", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/app", pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TitleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
