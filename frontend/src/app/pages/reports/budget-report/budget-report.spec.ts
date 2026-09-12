import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetReportComponent } from './budget-report';

describe('BudgetReportComponent', () => {
  let component: BudgetReportComponent;
  let fixture: ComponentFixture<BudgetReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetReportComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default selected project', () => {
    expect(component.selectedProject).toBe('Chennai Commercial Complex');
  });

  it('should have budget data', () => {
    expect(component.budgetRecords.length).toBeGreaterThan(0);
  });

  it('should have budget summary values', () => {
    expect(component.plannedBudget).toBe(50000000);
    expect(component.estimatedCost).toBe(52000000);
    expect(component.actualExpenses).toBe(34000000);
    expect(component.remainingBudget).toBe(16000000);
    expect(component.utilizationPercentage).toBe(68);
  });
});