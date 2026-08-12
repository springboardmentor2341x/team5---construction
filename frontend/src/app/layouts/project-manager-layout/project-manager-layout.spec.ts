import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerLayout } from './project-manager-layout';

describe('ProjectManagerLayout', () => {
  let component: ProjectManagerLayout;
  let fixture: ComponentFixture<ProjectManagerLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagerLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagerLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
