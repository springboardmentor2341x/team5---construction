import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetManagementTopNavbarComponent } from './budget-management-top-navbar';

describe('BudgetAndCostManagementTopNavbarComponent', () => {
  let component: BudgetManagementTopNavbarComponent;
  let fixture: ComponentFixture<BudgetManagementTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetManagementTopNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      BudgetManagementTopNavbarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});