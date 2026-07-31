import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectSchedule } from './admin-project-schedule';

describe('AdminProjectSchedule', () => {
  let component: AdminProjectSchedule;
  let fixture: ComponentFixture<AdminProjectSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProjectSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProjectSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
