import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditlogs } from './admin-auditlogs';

describe('AdminAuditlogs', () => {
  let component: AdminAuditlogs;
  let fixture: ComponentFixture<AdminAuditlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAuditlogs],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAuditlogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
