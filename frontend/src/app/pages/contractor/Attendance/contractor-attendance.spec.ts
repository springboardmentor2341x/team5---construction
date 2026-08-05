import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorAttendance } from './contractor-attendance';

describe('ContractorAttendance', () => {
  let component: ContractorAttendance;
  let fixture: ComponentFixture<ContractorAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorAttendance],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorAttendance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
