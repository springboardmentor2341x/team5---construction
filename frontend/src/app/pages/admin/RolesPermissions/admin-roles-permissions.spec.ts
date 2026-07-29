import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesPermissions } from './admin-roles-permissions';

describe('AdminRolesPermissions', () => {
  let component: AdminRolesPermissions;
  let fixture: ComponentFixture<AdminRolesPermissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesPermissions],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRolesPermissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
