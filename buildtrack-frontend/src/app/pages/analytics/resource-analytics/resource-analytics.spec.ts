import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAnalytics } from './resource-analytics';

describe('ResourceAnalytics', () => {
  let component: ResourceAnalytics;
  let fixture: ComponentFixture<ResourceAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
