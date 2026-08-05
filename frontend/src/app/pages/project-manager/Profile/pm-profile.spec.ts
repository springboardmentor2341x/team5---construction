import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmProfile } from './pm-profile';

describe('PmProfile', () => {
  let component: PmProfile;
  let fixture: ComponentFixture<PmProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(PmProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
