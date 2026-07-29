import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftScheduling } from './shift-scheduling';

describe('ShiftScheduling', () => {
  let component: ShiftScheduling;
  let fixture: ComponentFixture<ShiftScheduling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftScheduling],
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftScheduling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
