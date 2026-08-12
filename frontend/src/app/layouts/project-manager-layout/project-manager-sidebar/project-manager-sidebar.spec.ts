import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerSidebar } from './project-manager-sidebar';

describe('ProjectManagerSidebar', () => {
  let component: ProjectManagerSidebar;
  let fixture: ComponentFixture<ProjectManagerSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagerSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagerSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
