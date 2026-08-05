import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmProjectSchedule } from './pm-project-schedule';

describe('PmProjectSchedule', () => {
  let component: PmProjectSchedule;
  let fixture: ComponentFixture<PmProjectSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmProjectSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(PmProjectSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
