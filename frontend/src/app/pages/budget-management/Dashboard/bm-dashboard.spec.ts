import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmDashboardComponent } from './bm-dashboard';

describe('BmDashboardComponent', () => {
  let component: BmDashboardComponent;
  let fixture: ComponentFixture<BmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmDashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmDashboardComponent);
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
});