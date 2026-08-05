import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeActivityLogs } from './se-activity-logs';

describe('SeActivityLogs', () => {
  let component: SeActivityLogs;
  let fixture: ComponentFixture<SeActivityLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeActivityLogs],
    }).compileComponents();

    fixture = TestBed.createComponent(SeActivityLogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
