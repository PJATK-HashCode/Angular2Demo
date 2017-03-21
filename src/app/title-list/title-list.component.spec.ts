import { TestBed, inject } from '@angular/core/testing';

import { TitleListComponent } from './title-list.component';

describe('a title-list component', () => {
	let component: TitleListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TitleListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TitleListComponent], (TitleListComponent) => {
		component = TitleListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});