import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcurement } from './admin-procurement';

describe('AdminProcurement', () => {
  let component: AdminProcurement;
  let fixture: ComponentFixture<AdminProcurement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProcurement],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProcurement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
