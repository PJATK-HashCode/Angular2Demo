

import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: 'title-child',
	templateUrl: 'title.component.html',
	styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit {
		
	ngOnInit(): void {
	}


	@Input() public myTitle: string;

	private tst: number;

	public isVisible: boolean = false;


}