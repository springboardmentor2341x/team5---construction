import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrVendorManagementComponent } from './pr-vendor-management';

describe('PrVendorManagementComponent', () => {

  let component: PrVendorManagementComponent;
  let fixture: ComponentFixture<PrVendorManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrVendorManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrVendorManagementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});