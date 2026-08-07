import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneTracking } from './milestone-tracking';

describe('MilestoneTracking', () => {
  let component: MilestoneTracking;
  let fixture: ComponentFixture<MilestoneTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(MilestoneTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
