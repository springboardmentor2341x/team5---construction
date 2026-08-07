import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetManagement } from './budget-management';

describe('BudgetManagement', () => {
  let component: BudgetManagement;
  let fixture: ComponentFixture<BudgetManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
