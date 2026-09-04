import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrPurchaseOrdersComponent } from './pr-purchase-orders';

describe('PrPurchaseOrdersComponent', () => {

  let component: PrPurchaseOrdersComponent;
  let fixture: ComponentFixture<PrPurchaseOrdersComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PrPurchaseOrdersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrPurchaseOrdersComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load purchase orders', () => {
    expect(component.orders.length).toBeGreaterThan(0);
    expect(component.filteredOrders.length).toBeGreaterThan(0);
  });

  it('should have required procurement categories', () => {

    const categories = component.orders.map(
      order => order.category
    );

    expect(
      categories.every(category =>
        [
          'Raw Materials',
          'Equipment',
          'Machinery',
          'Safety Equipment',
          'Office Supplies'
        ].includes(category)
      )
    ).toBe(true);
  });

  it('should filter purchase orders by status', () => {

    component.selectedStatus = 'Approved';
    component.filterOrders();

    expect(
      component.filteredOrders.every(
        order => order.status === 'Approved'
      )
    ).toBe(true);
  });

  it('should filter purchase orders by vendor', () => {

    component.selectedVendor = 'ABC Building Supplies';
    component.filterOrders();

    expect(
      component.filteredOrders.every(
        order => order.vendor === 'ABC Building Supplies'
      )
    ).toBe(true);
  });

  it('should filter purchase orders by project', () => {

    component.selectedProject = 'Green Valley Apartment';
    component.filterOrders();

    expect(
      component.filteredOrders.every(
        order => order.project === 'Green Valley Apartment'
      )
    ).toBe(true);
  });

  it('should search purchase orders', () => {

    component.searchText = 'PO-001';
    component.filterOrders();

    expect(component.filteredOrders.length).toBeGreaterThan(0);

    expect(component.filteredOrders[0].id)
      .toBe('PO-001');
  });

  it('should open add purchase order form', () => {

    component.openAddOrder();

    expect(component.showAddOrder).toBe(true);
    expect(component.editingOrder).toBe(false);

    expect(component.orderForm.id)
      .toMatch(/^PO-\d{3}$/);
  });

  it('should open purchase order details', () => {

    const order = component.orders[0];

    component.viewOrder(order);

    expect(component.showViewOrder).toBe(true);
    expect(component.selectedOrder)
      .toEqual(order);
  });

  it('should close purchase order details', () => {

    component.viewOrder(component.orders[0]);

    component.closeViewOrder();

    expect(component.showViewOrder).toBe(false);
    expect(component.selectedOrder).toBeNull();
  });

  it('should open edit purchase order form', () => {

    const order = component.orders[0];

    component.editOrder(order);

    expect(component.showAddOrder).toBe(true);
    expect(component.editingOrder).toBe(true);

    expect(component.orderForm.id)
      .toBe(order.id);
  });

  it('should return correct status classes', () => {

    expect(component.getStatusClass('Pending'))
      .toBe('status-pending');

    expect(component.getStatusClass('Approved'))
      .toBe('status-approved');

    expect(component.getStatusClass('Processing'))
      .toBe('status-processing');

    expect(component.getStatusClass('Completed'))
      .toBe('status-completed');

    expect(component.getStatusClass('Cancelled'))
      .toBe('status-cancelled');
  });

  it('should generate a new purchase order ID', () => {

    component.openAddOrder();

    expect(component.orderForm.id)
      .toMatch(/^PO-\d{3}$/);
  });

  it('should calculate total amount correctly', () => {

    component.orderForm.quantity = 10;
    component.orderForm.unitPrice = 500;
    component.orderForm.tax = 0;
    component.orderForm.additionalCharges = 0;

    component.calculateTotal();

    expect(component.orderForm.totalAmount)
      .toBe(5000);
  });

});