import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeMilestones } from './se-milestones';

describe('SeMilestones', () => {
  let component: SeMilestones;
  let fixture: ComponentFixture<SeMilestones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeMilestones],
    }).compileComponents();

    fixture = TestBed.createComponent(SeMilestones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
