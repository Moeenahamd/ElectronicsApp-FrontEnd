import { TestBed } from '@angular/core/testing';

import { NavDropdownService } from './nav-dropdown.service';

describe('NavDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavDropdownService = TestBed.get(NavDropdownService);
    expect(service).toBeTruthy();
  });
});
