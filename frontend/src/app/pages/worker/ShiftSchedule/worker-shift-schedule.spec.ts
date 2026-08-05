import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerShiftSchedule } from './worker-shift-schedule';

describe('WorkerShiftSchedule', () => {
  let component: WorkerShiftSchedule;
  let fixture: ComponentFixture<WorkerShiftSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerShiftSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerShiftSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
