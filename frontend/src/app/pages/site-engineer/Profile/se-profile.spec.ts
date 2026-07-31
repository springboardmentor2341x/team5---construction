import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeProfile } from './se-profile';

describe('SeProfile', () => {
  let component: SeProfile;
  let fixture: ComponentFixture<SeProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(SeProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
