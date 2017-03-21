import { Component, OnInit } from '@angular/core';
import { TitleModel } from "../title-list/title-list.component";

@Component({
	selector: 'add-title',
	templateUrl: 'add-title.component.html'
})

export class AddTitleComponent implements OnInit {
 public isLoading:boolean = true;
  public titles:Array<TitleModel> = [];
  
  private _title : string;

  public OnLoading(loading:boolean):void{
    this.isLoading=loading;
    //alert(loading);
  }

  public get title() : string {
    return this._title;
  }

  public set title(v : string) {
    this._title = v;
  }
  
  public addTitle():void{
    this.titles.push(new TitleModel(this._title,true));
    this._title='';
  }

  public constructor(){

    this.title = "Hello";
  }

  public ngOnInit():void{
      


  }
}