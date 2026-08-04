import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngineers } from './site-engineers';

describe('SiteEngineers', () => {
  let component: SiteEngineers;
  let fixture: ComponentFixture<SiteEngineers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngineers],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteEngineers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
