import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAnalytics } from './budget-analytics';

describe('BudgetAnalytics', () => {
  let component: BudgetAnalytics;
  let fixture: ComponentFixture<BudgetAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
