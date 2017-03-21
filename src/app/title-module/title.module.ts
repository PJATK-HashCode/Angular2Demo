import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TitleComponent } from "./components/title/title.component";
import { TitleListComponent } from "./components/title-list/title-list.component";
import { AddTitleComponent } from "./components/add-title/add-title.component";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule
        ],
    exports: [TitleComponent, TitleListComponent, AddTitleComponent],
    declarations: [TitleComponent, TitleListComponent, AddTitleComponent],
    providers: [],
    schemas: []
})
export class TitleModule { }
