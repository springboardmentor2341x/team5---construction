import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResourceManagement } from './admin-resource-management';

describe('AdminResourceManagement', () => {
  let component: AdminResourceManagement;
  let fixture: ComponentFixture<AdminResourceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminResourceManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminResourceManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
