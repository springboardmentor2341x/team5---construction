import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerDashboard } from './project-manager-dashboard';

describe('ProjectManagerDashboard', () => {
  let component: ProjectManagerDashboard;
  let fixture: ComponentFixture<ProjectManagerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagerDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
