import { Component, OnInit } from '@angular/core';
import { TitleModel } from "../../models/title-model";
import { TitlesService } from "../../services/titles-service";

@Component({
  selector: 'add-title',
  templateUrl: 'add-title.component.html'
})

export class AddTitleComponent implements OnInit {
  public isLoading: boolean = true;
  public titles: Array<TitleModel> = [];

  private _title: string;


  public OnLoading(loading: boolean): void {
    this.isLoading = loading;
    //alert(loading);
  }

  public get title(): string {
    return this._title;
  }

  public set title(v: string) {
    this._title = v;
  }

  public addTitle(): void {
    let model = new TitleModel(this._title, true);
    this.titlesService.addTitle(model);
    this._title = '';
  }

  public constructor(private titlesService: TitlesService) {

    this.title = "Hello";
  }

  public ngOnInit(): void {

    this.titlesService.getAll().subscribe(model => this.titles = model);

  }
}