import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmResourceUtilization } from './rm-resource-utilization';

describe('RmResourceUtilization', () => {
  let component: RmResourceUtilization;
  let fixture: ComponentFixture<RmResourceUtilization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmResourceUtilization],
    }).compileComponents();

    fixture = TestBed.createComponent(RmResourceUtilization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
