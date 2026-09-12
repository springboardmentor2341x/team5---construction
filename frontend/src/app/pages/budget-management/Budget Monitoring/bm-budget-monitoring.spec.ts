import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmBudgetMonitoringComponent } from './bm-budget-monitoring';

describe('BmBudgetMonitoringComponent', () => {

  let component: BmBudgetMonitoringComponent;
  let fixture: ComponentFixture<BmBudgetMonitoringComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BmBudgetMonitoringComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmBudgetMonitoringComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate remaining budget', () => {
    expect(component.remainingBudget).toBe(1750000);
  });

  it('should calculate budget utilization', () => {
    expect(component.utilization).toBe(65);
  });

  it('should calculate estimated utilization', () => {
    expect(component.estimatedUtilization).toBe(95);
  });

  it('should calculate variance', () => {
    expect(component.variance).toBe(250000);
  });

});