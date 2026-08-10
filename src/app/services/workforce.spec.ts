import { TestBed } from '@angular/core/testing';

import { Workforce } from './workforce';

describe('Workforce', () => {
  let service: Workforce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Workforce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
