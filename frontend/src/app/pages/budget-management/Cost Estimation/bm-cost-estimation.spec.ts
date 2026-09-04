import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmCostEstimationComponent } from './bm-cost-estimation';

describe('BmCostEstimationComponent', () => {

  let component: BmCostEstimationComponent;
  let fixture: ComponentFixture<BmCostEstimationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BmCostEstimationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BmCostEstimationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total estimated cost', () => {
    expect(component.totalEstimated).toBe(4050000);
  });

  it('should calculate total actual cost', () => {
    expect(component.totalActual).toBe(3020000);
  });

  it('should calculate variance', () => {
    expect(component.totalVariance).toBe(1030000);
  });

});