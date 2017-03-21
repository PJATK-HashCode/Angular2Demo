import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleComponent }   from './title.component';
import { BrowserModule } from '@angular/platform-browser';
import { TitleListComponent } from "../title-list/title-list.component";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule
        ],
    exports: [TitleComponent, TitleListComponent],
    declarations: [TitleComponent, TitleListComponent],
    providers: [],
    schemas: []
})
export class TitleModule { }
