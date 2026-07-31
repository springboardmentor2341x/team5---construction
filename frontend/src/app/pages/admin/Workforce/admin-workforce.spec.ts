import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkforce } from './admin-workforce';

describe('AdminWorkforce', () => {
  let component: AdminWorkforce;
  let fixture: ComponentFixture<AdminWorkforce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWorkforce],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminWorkforce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
