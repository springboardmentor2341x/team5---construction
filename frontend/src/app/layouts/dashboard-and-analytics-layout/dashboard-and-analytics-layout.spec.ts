import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAndAnalyticsLayoutComponent } from './dashboard-and-analytics-layout';

describe('DashboardAndAnalyticsLayoutComponent', () => {
  let component: DashboardAndAnalyticsLayoutComponent;
  let fixture: ComponentFixture<DashboardAndAnalyticsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAndAnalyticsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAndAnalyticsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});