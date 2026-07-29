import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerMyTasks } from './worker-my-tasks';

describe('WorkerMyTasks', () => {
  let component: WorkerMyTasks;
  let fixture: ComponentFixture<WorkerMyTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerMyTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerMyTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
