import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMonitoring } from './stock-monitoring';

describe('StockMonitoring', () => {
  let component: StockMonitoring;
  let fixture: ComponentFixture<StockMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMonitoring],
    }).compileComponents();

    fixture = TestBed.createComponent(StockMonitoring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
