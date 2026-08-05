import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAttendance } from './worker-attendance';

describe('WorkerAttendance', () => {
  let component: WorkerAttendance;
  let fixture: ComponentFixture<WorkerAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerAttendance],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerAttendance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
