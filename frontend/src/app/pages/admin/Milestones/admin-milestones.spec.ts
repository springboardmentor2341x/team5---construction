import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMilestones } from './admin-milestones';

describe('AdminMilestones', () => {
  let component: AdminMilestones;
  let fixture: ComponentFixture<AdminMilestones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMilestones],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMilestones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
