
import { TitleModel } from "../models/title-model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class TitlesService {

    private static _titles: Array<TitleModel> = [];

    public addTitle(model: TitleModel): void {
        TitlesService._titles.push(model);
    }

    public getAll():Observable<Array<TitleModel>>{
        return Observable.of(TitlesService._titles);
    }

    public getTitle(title: string):Observable<TitleModel> {
        return Observable.of( TitlesService._titles
        .find(model => model.title == title));
    }

}