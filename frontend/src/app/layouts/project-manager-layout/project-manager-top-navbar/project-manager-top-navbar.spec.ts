import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerTopNavbar } from './project-manager-top-navbar';

describe('ProjectManagerTopNavbar', () => {
  let component: ProjectManagerTopNavbar;
  let fixture: ComponentFixture<ProjectManagerTopNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagerTopNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagerTopNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
