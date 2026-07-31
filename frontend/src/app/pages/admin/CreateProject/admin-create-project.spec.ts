import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProject } from './admin-create-project';

describe('AdminCreateProject', () => {
  let component: AdminCreateProject;
  let fixture: ComponentFixture<AdminCreateProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateProject],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
