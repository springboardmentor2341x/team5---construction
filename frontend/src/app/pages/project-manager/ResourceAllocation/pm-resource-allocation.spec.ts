import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmResourceAllocation } from './pm-resource-allocation';

describe('PmResourceAllocation', () => {
  let component: PmResourceAllocation;
  let fixture: ComponentFixture<PmResourceAllocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmResourceAllocation],
    }).compileComponents();

    fixture = TestBed.createComponent(PmResourceAllocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
