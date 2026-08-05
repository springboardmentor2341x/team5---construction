import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorShiftSchedule } from './contractor-shift-schedule';

describe('ContractorShiftSchedule', () => {
  let component: ContractorShiftSchedule;
  let fixture: ComponentFixture<ContractorShiftSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorShiftSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorShiftSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
