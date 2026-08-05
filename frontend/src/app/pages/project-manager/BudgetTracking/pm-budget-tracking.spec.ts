import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmBudgetTracking } from './pm-budget-tracking';

describe('PmBudgetTracking', () => {
  let component: PmBudgetTracking;
  let fixture: ComponentFixture<PmBudgetTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmBudgetTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(PmBudgetTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
