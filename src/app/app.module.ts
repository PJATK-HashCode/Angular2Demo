import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";

import { RouterModule, Routes } from '@angular/router';
import { TitleModule } from "./title-module/title.module";
import { AddTitleComponent } from "./title-module/components/add-title/add-title.component";
import { EditTitleComponent } from "./title-module/components/edit-title/edit-title.component";

const routes: Routes = [
  { path: "titles", component: AddTitleComponent, children:[
    
    {path:'title/:title', component:EditTitleComponent}
  ] },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/titles", pathMatch:'full' }
  
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
