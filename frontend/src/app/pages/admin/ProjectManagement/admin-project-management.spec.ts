import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectManagement } from './admin-project-management';

describe('AdminProjectManagement', () => {
  let component: AdminProjectManagement;
  let fixture: ComponentFixture<AdminProjectManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProjectManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProjectManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
