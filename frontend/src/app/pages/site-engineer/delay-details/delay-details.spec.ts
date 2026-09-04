import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayDetails } from './delay-details';

describe('DelayDetails', () => {
  let component: DelayDetails;
  let fixture: ComponentFixture<DelayDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DelayDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
