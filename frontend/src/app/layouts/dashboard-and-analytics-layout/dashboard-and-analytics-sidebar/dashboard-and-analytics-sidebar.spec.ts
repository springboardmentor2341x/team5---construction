import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAndAnalyticsSidebarComponent } from './dashboard-and-analytics-sidebar';

describe('DashboardAndAnalyticsSidebarComponent', () => {
  let component: DashboardAndAnalyticsSidebarComponent;
  let fixture: ComponentFixture<DashboardAndAnalyticsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAndAnalyticsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAndAnalyticsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});