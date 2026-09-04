import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneDetails } from './milestone-details';

describe('MilestoneDetails', () => {
  let component: MilestoneDetails;
  let fixture: ComponentFixture<MilestoneDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MilestoneDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
