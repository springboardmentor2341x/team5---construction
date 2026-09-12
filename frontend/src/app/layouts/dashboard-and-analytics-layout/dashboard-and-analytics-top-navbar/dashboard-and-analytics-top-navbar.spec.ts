import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAndAnalyticsTopNavbarComponent } from './dashboard-and-analytics-top-navbar';

describe('DashboardAndAnalyticsTopNavbarComponent', () => {
  let component: DashboardAndAnalyticsTopNavbarComponent;
  let fixture: ComponentFixture<DashboardAndAnalyticsTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAndAnalyticsTopNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(
      DashboardAndAnalyticsTopNavbarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});