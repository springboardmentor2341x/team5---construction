import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMilestones } from './client-milestones';

describe('ClientMilestones', () => {
  let component: ClientMilestones;
  let fixture: ComponentFixture<ClientMilestones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMilestones],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientMilestones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
