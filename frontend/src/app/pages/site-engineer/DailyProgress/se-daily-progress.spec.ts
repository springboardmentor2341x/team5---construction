import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeDailyProgress } from './se-daily-progress';

describe('SeDailyProgress', () => {
  let component: SeDailyProgress;
  let fixture: ComponentFixture<SeDailyProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeDailyProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(SeDailyProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
