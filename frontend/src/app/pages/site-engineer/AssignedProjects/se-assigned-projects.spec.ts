import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeAssignedProjects } from './se-assigned-projects';

describe('SeAssignedProjects', () => {
  let component: SeAssignedProjects;
  let fixture: ComponentFixture<SeAssignedProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeAssignedProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(SeAssignedProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
