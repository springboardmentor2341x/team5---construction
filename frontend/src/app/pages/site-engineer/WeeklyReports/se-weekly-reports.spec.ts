import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeWeeklyReports } from './se-weekly-reports';

describe('SeWeeklyReports', () => {
  let component: SeWeeklyReports;
  let fixture: ComponentFixture<SeWeeklyReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeWeeklyReports],
    }).compileComponents();

    fixture = TestBed.createComponent(SeWeeklyReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
