import { TestBed, inject } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('a title component', () => {
	let component: TitleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TitleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TitleComponent], (TitleComponent) => {
		component = TitleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});