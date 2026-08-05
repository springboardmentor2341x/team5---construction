import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmMilestones } from './pm-milestones';

describe('PmMilestones', () => {
  let component: PmMilestones;
  let fixture: ComponentFixture<PmMilestones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmMilestones],
    }).compileComponents();

    fixture = TestBed.createComponent(PmMilestones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
