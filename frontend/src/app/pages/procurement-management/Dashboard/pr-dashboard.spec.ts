import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrDashboardComponent } from './pr-dashboard';

describe('PrDashboardComponent', () => {

  let component: PrDashboardComponent;
  let fixture: ComponentFixture<PrDashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PrDashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrDashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display procurement dashboard', () => {

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent)
      .toContain('Procurement Dashboard');

  });

  it('should display procurement request count', () => {

    expect(component.totalRequests).toBe(128);

  });

  it('should display purchase order count', () => {

    expect(component.totalPurchaseOrders).toBe(64);

  });

  it('should display active vendor count', () => {

    expect(component.activeVendors).toBe(32);

  });

  it('should display procurement value', () => {

    expect(component.procurementValue).toBe('₹8.2M');

  });

  it('should display pending approvals', () => {

    expect(component.pendingApprovals).toBe(18);

  });

  it('should display invoice information', () => {

    expect(component.pendingInvoices).toBe(12);
    expect(component.overdueInvoices).toBe(4);

  });

  it('should contain procurement categories', () => {

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent)
      .toContain('Raw Materials');

    expect(element.textContent)
      .toContain('Equipment');

    expect(element.textContent)
      .toContain('Machinery');

    expect(element.textContent)
      .toContain('Safety Equipment');

    expect(element.textContent)
      .toContain('Office Supplies');

  });

  it('should contain recent procurement requests', () => {

    expect(component.recentRequests.length)
      .toBeGreaterThan(0);

  });

  it('should contain recent purchase orders', () => {

    expect(component.recentOrders.length)
      .toBeGreaterThan(0);

  });

  it('should refresh dashboard', () => {

    expect(() => component.refreshDashboard())
      .not.toThrow();

  });

});