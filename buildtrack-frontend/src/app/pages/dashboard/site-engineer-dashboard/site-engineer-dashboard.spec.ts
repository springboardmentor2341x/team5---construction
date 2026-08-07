import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngineerDashboard } from './site-engineer-dashboard';

describe('SiteEngineerDashboard', () => {
  let component: SiteEngineerDashboard;
  let fixture: ComponentFixture<SiteEngineerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngineerDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteEngineerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
