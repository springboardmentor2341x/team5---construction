import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmExpenseManagementComponent } from './bm-expense-management';

describe('BmExpenseManagementComponent', () => {

  let component: BmExpenseManagementComponent;
  let fixture: ComponentFixture<BmExpenseManagementComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BmExpenseManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmExpenseManagementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total expenses', () => {
    expect(component.totalExpenses).toBe(3250000);
  });

  it('should calculate expense count', () => {
    expect(component.expenseCount).toBe(6);
  });

  it('should add an expense', () => {

    component.newExpense = {
      date: '2026-08-25',
      description: 'Test Expense',
      category: 'Labor Cost',
      amount: 10000,
      sourceModule: 'Manual Entry'
    };

    component.addExpense();

    expect(component.expenses.length).toBe(7);
    expect(component.totalExpenses).toBe(3260000);
  });

});