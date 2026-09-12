import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PurchaseOrder {
  id: string;
  vendor: string;
  project: string;
  procurementRequest: string;
  item: string;
  category: string;
  orderDate: string;
  expectedDeliveryDate: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  additionalCharges: number;
  totalAmount: number;
  status: string;
  remarks: string;
}

@Component({
  selector: 'app-pr-purchase-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-purchase-orders.html',
  styleUrl: './pr-purchase-orders.css'
})
export class PrPurchaseOrdersComponent {

  searchText = '';
  selectedStatus = 'All';
  selectedVendor = 'All';
  selectedProject = 'All';

  showViewOrder = false;
  showAddOrder = false;
  editingOrder = false;

  selectedOrder: PurchaseOrder | null = null;

  orders: PurchaseOrder[] = [
    {
      id: 'PO-001',
      vendor: 'ABC Building Supplies',
      project: 'Green Valley Apartment',
      procurementRequest: 'PR-001',
      item: 'Cement',
      category: 'Raw Materials',
      orderDate: '2026-08-20',
      expectedDeliveryDate: '2026-09-05',
      quantity: 500,
      unitPrice: 420,
      tax: 37800,
      additionalCharges: 5000,
      totalAmount: 252800,
      status: 'Approved',
      remarks: 'Cement required for foundation work.'
    },
    {
      id: 'PO-002',
      vendor: 'BuildTech Equipment',
      project: 'Metro Commercial Complex',
      procurementRequest: 'PR-002',
      item: 'Concrete Mixer',
      category: 'Equipment',
      orderDate: '2026-08-21',
      expectedDeliveryDate: '2026-09-10',
      quantity: 2,
      unitPrice: 85000,
      tax: 30600,
      additionalCharges: 5000,
      totalAmount: 205600,
      status: 'Processing',
      remarks: 'Mixer required for structural construction.'
    },
    {
      id: 'PO-003',
      vendor: 'Prime Machinery Ltd',
      project: 'Sunrise Villa Project',
      procurementRequest: 'PR-003',
      item: 'Excavator',
      category: 'Machinery',
      orderDate: '2026-08-22',
      expectedDeliveryDate: '2026-09-15',
      quantity: 1,
      unitPrice: 450000,
      tax: 81000,
      additionalCharges: 10000,
      totalAmount: 541000,
      status: 'Pending',
      remarks: 'Excavator required for excavation work.'
    },
    {
      id: 'PO-004',
      vendor: 'SafeGuard Industries',
      project: 'Green Valley Apartment',
      procurementRequest: 'PR-004',
      item: 'Safety Helmets',
      category: 'Safety Equipment',
      orderDate: '2026-08-23',
      expectedDeliveryDate: '2026-09-02',
      quantity: 100,
      unitPrice: 650,
      tax: 11700,
      additionalCharges: 1500,
      totalAmount: 78200,
      status: 'Completed',
      remarks: 'Safety helmets for site workers.'
    },
    {
      id: 'PO-005',
      vendor: 'OfficeMart Supplies',
      project: 'Metro Commercial Complex',
      procurementRequest: 'PR-005',
      item: 'Printer Paper',
      category: 'Office Supplies',
      orderDate: '2026-08-24',
      expectedDeliveryDate: '2026-08-30',
      quantity: 50,
      unitPrice: 450,
      tax: 4050,
      additionalCharges: 500,
      totalAmount: 27050,
      status: 'Approved',
      remarks: 'Office supplies for project administration.'
    }
  ];

  filteredOrders: PurchaseOrder[] = [...this.orders];

  orderForm: PurchaseOrder = this.createEmptyOrder();

  get totalOrders(): number {
    return this.orders.length;
  }

  get pendingOrders(): number {
    return this.orders.filter(o => o.status === 'Pending').length;
  }

  get processingOrders(): number {
    return this.orders.filter(o => o.status === 'Processing').length;
  }

  get completedOrders(): number {
    return this.orders.filter(o => o.status === 'Completed').length;
  }

  get totalOrderAmount(): number {
    return this.orders.reduce(
      (sum, order) => sum + Number(order.totalAmount || 0),
      0
    );
  }

  private createEmptyOrder(): PurchaseOrder {
    return {
      id: '',
      vendor: '',
      project: '',
      procurementRequest: '',
      item: '',
      category: 'Raw Materials',
      orderDate: this.getToday(),
      expectedDeliveryDate: '',
      quantity: 1,
      unitPrice: 0,
      tax: 0,
      additionalCharges: 0,
      totalAmount: 0,
      status: 'Pending',
      remarks: ''
    };
  }

  private getToday(): string {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private generateOrderId(): string {
    const nextNumber = this.orders.length + 1;
    return `PO-${String(nextNumber).padStart(3, '0')}`;
  }

  filterOrders(): void {
    const search = this.searchText.trim().toLowerCase();

    this.filteredOrders = this.orders.filter(order => {

      const matchesSearch =
        !search ||
        order.id.toLowerCase().includes(search) ||
        order.vendor.toLowerCase().includes(search) ||
        order.project.toLowerCase().includes(search) ||
        order.procurementRequest.toLowerCase().includes(search) ||
        order.item.toLowerCase().includes(search) ||
        order.category.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        order.status === this.selectedStatus;

      const matchesVendor =
        this.selectedVendor === 'All' ||
        order.vendor === this.selectedVendor;

      const matchesProject =
        this.selectedProject === 'All' ||
        order.project === this.selectedProject;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesVendor &&
        matchesProject
      );
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-pending';

      case 'Approved':
        return 'status-approved';

      case 'Processing':
        return 'status-processing';

      case 'Completed':
        return 'status-completed';

      case 'Cancelled':
        return 'status-cancelled';

      default:
        return '';
    }
  }

  viewOrder(order: PurchaseOrder): void {
    this.selectedOrder = order;
    this.showViewOrder = true;
  }

  closeViewOrder(): void {
    this.showViewOrder = false;
    this.selectedOrder = null;
  }

  openAddOrder(): void {
    this.editingOrder = false;
    this.orderForm = this.createEmptyOrder();
    this.orderForm.id = this.generateOrderId();
    this.showAddOrder = true;
  }

  editOrder(order: PurchaseOrder): void {
    this.editingOrder = true;
    this.orderForm = { ...order };
    this.showAddOrder = true;
  }

  closeAddOrder(): void {
    this.showAddOrder = false;
    this.editingOrder = false;
  }

  calculateTotal(): void {
    const quantity = Number(this.orderForm.quantity) || 0;
    const unitPrice = Number(this.orderForm.unitPrice) || 0;
    const tax = Number(this.orderForm.tax) || 0;
    const additionalCharges =
      Number(this.orderForm.additionalCharges) || 0;

    this.orderForm.totalAmount =
      quantity * unitPrice +
      tax +
      additionalCharges;
  }

  saveOrder(): void {

    this.calculateTotal();

    if (!this.orderForm.procurementRequest.trim()) {
      alert('Please enter Procurement Request.');
      return;
    }

    if (!this.orderForm.vendor) {
      alert('Please select Vendor.');
      return;
    }

    if (!this.orderForm.project) {
      alert('Please select Project.');
      return;
    }

    if (!this.orderForm.item.trim()) {
      alert('Please enter Item / Material.');
      return;
    }

    if (!this.orderForm.orderDate) {
      alert('Please select Order Date.');
      return;
    }

    if (this.editingOrder) {

      const index = this.orders.findIndex(
        order => order.id === this.orderForm.id
      );

      if (index !== -1) {
        this.orders[index] = { ...this.orderForm };
      }

      alert('Purchase Order updated successfully.');

    } else {

      this.orderForm.id = this.generateOrderId();

      this.orders.push({
        ...this.orderForm
      });

      alert('Purchase Order created successfully.');
    }

    this.filterOrders();
    this.closeAddOrder();
  }

  deleteOrder(order: PurchaseOrder): void {

    const confirmed = confirm(
      `Are you sure you want to delete ${order.id}?`
    );

    if (!confirmed) {
      return;
    }

    this.orders = this.orders.filter(
      item => item.id !== order.id
    );

    this.filterOrders();
  }
}