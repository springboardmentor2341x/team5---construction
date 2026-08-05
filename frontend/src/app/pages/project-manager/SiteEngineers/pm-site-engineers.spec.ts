import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmSiteEngineers } from './pm-site-engineers';

describe('PmSiteEngineers', () => {
  let component: PmSiteEngineers;
  let fixture: ComponentFixture<PmSiteEngineers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmSiteEngineers],
    }).compileComponents();

    fixture = TestBed.createComponent(PmSiteEngineers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
