import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmBudgetPlanningComponent } from './bm-budget-planning';

describe('BmBudgetPlanningComponent', () => {

  let component: BmBudgetPlanningComponent;
  let fixture: ComponentFixture<BmBudgetPlanningComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BmBudgetPlanningComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmBudgetPlanningComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total allocated budget', () => {
    expect(component.totalAllocated).toBe(5000000);
  });

  it('should calculate remaining budget', () => {
    expect(component.remainingBudget).toBe(0);
  });

});