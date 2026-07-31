import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmContractors } from './pm-contractors';

describe('PmContractors', () => {
  let component: PmContractors;
  let fixture: ComponentFixture<PmContractors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmContractors],
    }).compileComponents();

    fixture = TestBed.createComponent(PmContractors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
