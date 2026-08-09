import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReportDetails } from './weekly-report-details';

describe('WeeklyReportDetails', () => {
  let component: WeeklyReportDetails;
  let fixture: ComponentFixture<WeeklyReportDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyReportDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyReportDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
