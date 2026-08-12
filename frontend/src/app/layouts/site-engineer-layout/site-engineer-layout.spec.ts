import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngineerLayout } from './site-engineer-layout';

describe('SiteEngineerLayout', () => {
  let component: SiteEngineerLayout;
  let fixture: ComponentFixture<SiteEngineerLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngineerLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteEngineerLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
