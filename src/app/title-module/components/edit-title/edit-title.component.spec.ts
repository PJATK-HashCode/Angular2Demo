import { TestBed, inject } from '@angular/core/testing';

import { EditTitleComponent } from './edit-title.component';

describe('a edit-title component', () => {
	let component: EditTitleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EditTitleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EditTitleComponent], (EditTitleComponent) => {
		component = EditTitleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});