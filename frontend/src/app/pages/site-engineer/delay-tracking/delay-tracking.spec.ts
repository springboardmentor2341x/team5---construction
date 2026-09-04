import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayTracking } from './delay-tracking';

describe('DelayTracking', () => {
  let component: DelayTracking;
  let fixture: ComponentFixture<DelayTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(DelayTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
