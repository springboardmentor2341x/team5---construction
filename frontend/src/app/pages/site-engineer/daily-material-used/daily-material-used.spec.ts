import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMaterialUsed } from './daily-material-used';

describe('DailyMaterialUsed', () => {
  let component: DailyMaterialUsed;
  let fixture: ComponentFixture<DailyMaterialUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyMaterialUsed],
    }).compileComponents();

    fixture = TestBed.createComponent(DailyMaterialUsed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
