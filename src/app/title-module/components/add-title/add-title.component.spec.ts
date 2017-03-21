import { TestBed, inject } from '@angular/core/testing';

import { AddTitleComponent } from './add-title.component';

describe('a add-title component', () => {
	let component: AddTitleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AddTitleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AddTitleComponent], (AddTitleComponent) => {
		component = AddTitleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});