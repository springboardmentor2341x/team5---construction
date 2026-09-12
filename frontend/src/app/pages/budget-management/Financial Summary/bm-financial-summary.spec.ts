import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmFinancialSummaryComponent } from './bm-financial-summary';

describe('BmFinancialSummaryComponent', () => {

  let component: BmFinancialSummaryComponent;
  let fixture: ComponentFixture<BmFinancialSummaryComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BmFinancialSummaryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmFinancialSummaryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should calculate remaining budget correctly', () => {
    expect(component.remainingBudget).toBe(1750000);
  });


  it('should calculate budget utilization correctly', () => {
    expect(component.utilization).toBe(65);
  });


  it('should calculate estimated utilization correctly', () => {
    expect(component.estimatedUtilization).toBe(95);
  });


  it('should calculate budget variance correctly', () => {
    expect(component.budgetVariance).toBe(250000);
  });


  it('should calculate actual variance correctly', () => {
    expect(component.actualVariance).toBe(1500000);
  });


  it('should contain all required cost categories', () => {

    expect(component.categories.length).toBe(6);

    expect(component.categories.map(category => category.name))
      .toEqual([
        'Labor Cost',
        'Material Cost',
        'Equipment Cost',
        'Transportation Cost',
        'Maintenance Cost',
        'Administrative Cost'
      ]);
  });


  it('should format currency correctly', () => {
    expect(component.formatCurrency(1750000))
      .toBe('₹1,750,000');
  });

});