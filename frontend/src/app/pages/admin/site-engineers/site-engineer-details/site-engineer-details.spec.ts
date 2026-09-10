import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngineerDetails } from './site-engineer-details';

describe('SiteEngineerDetails', () => {
  let component: SiteEngineerDetails;
  let fixture: ComponentFixture<SiteEngineerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngineerDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteEngineerDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
