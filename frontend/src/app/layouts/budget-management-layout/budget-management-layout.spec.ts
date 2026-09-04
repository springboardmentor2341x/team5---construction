import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetManagementLayoutComponent } from './budget-management-layout';

describe('BudgetAndCostManagementLayoutComponent', () => {
  let component: BudgetManagementLayoutComponent;
  let fixture: ComponentFixture<BudgetManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetManagementLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});