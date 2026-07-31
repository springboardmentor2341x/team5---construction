import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmLogout } from './pm-logout';

describe('PmLogout', () => {
  let component: PmLogout;
  let fixture: ComponentFixture<PmLogout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmLogout],
    }).compileComponents();

    fixture = TestBed.createComponent(PmLogout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
