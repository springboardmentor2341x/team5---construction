import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmSiteProgress } from './pm-site-progress';

describe('PmSiteProgress', () => {
  let component: PmSiteProgress;
  let fixture: ComponentFixture<PmSiteProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmSiteProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(PmSiteProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
