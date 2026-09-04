import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetManagementSidebarComponent } from './budget-management-sidebar';

describe('BudgetManagementSidebarComponent', () => {
  let component: BudgetManagementSidebarComponent;
  let fixture: ComponentFixture<BudgetManagementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetManagementSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetManagementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});