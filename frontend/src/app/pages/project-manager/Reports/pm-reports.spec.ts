import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmReports } from './pm-reports';

describe('PmReports', () => {
  let component: PmReports;
  let fixture: ComponentFixture<PmReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmReports],
    }).compileComponents();

    fixture = TestBed.createComponent(PmReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
