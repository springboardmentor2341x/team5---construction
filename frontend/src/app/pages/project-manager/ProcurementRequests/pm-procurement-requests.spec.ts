import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmProcurementRequests } from './pm-procurement-requests';

describe('PmProcurementRequests', () => {
  let component: PmProcurementRequests;
  let fixture: ComponentFixture<PmProcurementRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmProcurementRequests],
    }).compileComponents();

    fixture = TestBed.createComponent(PmProcurementRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
