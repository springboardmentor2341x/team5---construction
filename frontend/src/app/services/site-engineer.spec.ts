import { TestBed } from '@angular/core/testing';

import { SiteEngineer } from './site-engineer';

describe('SiteEngineer', () => {
  let service: SiteEngineer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteEngineer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
