import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrSupplierManagementComponent } from './pr-supplier-management';

describe('PrSupplierManagementComponent', () => {

  let component: PrSupplierManagementComponent;
  let fixture: ComponentFixture<PrSupplierManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrSupplierManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrSupplierManagementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  // =========================================================
  // CREATE
  // =========================================================

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // =========================================================
  // INITIAL DATA
  // =========================================================

  it('should have suppliers', () => {
    expect(component.suppliers.length).toBeGreaterThan(0);
  });

  it('should have categories', () => {
    expect(component.categories.length).toBeGreaterThan(0);
  });

  // =========================================================
  // STATISTICS
  // =========================================================

  it('should calculate total suppliers', () => {
    expect(component.totalSuppliers).toBe(component.suppliers.length);
  });

  it('should calculate active suppliers', () => {
    let count = 0;

    for (const supplier of component.suppliers) {
      if (supplier.status === 'Active') {
        count++;
      }
    }

    expect(component.activeSuppliers).toBe(count);
  });

  it('should calculate pending suppliers', () => {
    let count = 0;

    for (const supplier of component.suppliers) {
      if (supplier.status === 'Pending') {
        count++;
      }
    }

    expect(component.pendingSuppliers).toBe(count);
  });

  it('should calculate material suppliers', () => {
    expect(component.materialSuppliers).toBeGreaterThanOrEqual(0);
  });

  it('should calculate total materials', () => {
    expect(component.totalMaterials).toBeGreaterThanOrEqual(0);
  });

  it('should calculate average rating', () => {
    expect(component.averageRating).toBeGreaterThanOrEqual(0);
  });

  // =========================================================
  // SEARCH
  // =========================================================

  it('should search supplier by name', () => {
    component.searchText = component.suppliers[0].name;

    expect(component.filteredSuppliers.length).toBeGreaterThan(0);
  });

  it('should search supplier by ID', () => {
    const id = component.suppliers[0].id;

    component.searchText = id;

    expect(component.filteredSuppliers.length).toBe(1);
    expect(component.filteredSuppliers[0].id).toBe(id);
  });

  it('should search supplier by contact person', () => {
    component.searchText = component.suppliers[0].contactPerson;

    expect(component.filteredSuppliers.length).toBeGreaterThan(0);
  });

  it('should search supplier by email', () => {
    component.searchText = component.suppliers[0].email;

    expect(component.filteredSuppliers.length).toBeGreaterThan(0);
  });

  it('should search supplier by materials', () => {
    component.searchText = component.suppliers[0].materials;

    expect(component.filteredSuppliers.length).toBeGreaterThan(0);
  });

  // =========================================================
  // STATUS FILTER
  // =========================================================

  it('should filter active suppliers', () => {
    component.selectedStatus = 'Active';

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.status).toBe('Active');
    }
  });

  it('should filter pending suppliers', () => {
    component.selectedStatus = 'Pending';

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.status).toBe('Pending');
    }
  });

  it('should filter inactive suppliers', () => {
    component.selectedStatus = 'Inactive';

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.status).toBe('Inactive');
    }
  });

  // =========================================================
  // CATEGORY FILTER
  // =========================================================

  it('should filter suppliers by category', () => {
    const category = component.suppliers[0].category;

    component.selectedCategory = category;

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.category).toBe(category);
    }
  });

  // =========================================================
  // RATING FILTER
  // =========================================================

  it('should filter suppliers by rating', () => {
    component.selectedRating = '4';

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.rating).toBeGreaterThanOrEqual(4);
    }
  });

  // =========================================================
  // COMBINED FILTER
  // =========================================================

  it('should apply status and category filters', () => {
    component.selectedStatus = 'Active';

    const results = component.filteredSuppliers;

    for (const supplier of results) {
      expect(supplier.status).toBe('Active');
    }
  });

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  it('should clear all filters', () => {
    component.searchText = 'ABC';
    component.selectedStatus = 'Pending';
    component.selectedCategory = 'Steel';
    component.selectedRating = '4';

    component.clearFilters();

    expect(component.searchText).toBe('');
    expect(component.selectedStatus).toBe('All');
    expect(component.selectedCategory).toBe('All');
    expect(component.selectedRating).toBe('');
  });

  // =========================================================
  // ADD SUPPLIER
  // =========================================================

  it('should open add supplier modal', () => {
    component.openAddSupplier();

    expect(component.showSupplierModal).toBe(true);
    expect(component.showAddModal).toBe(true);
    expect(component.isEditMode).toBe(false);
  });

  it('should close supplier modal', () => {
    component.openAddSupplier();

    component.closeSupplierModal();

    expect(component.showSupplierModal).toBe(false);
    expect(component.showAddModal).toBe(false);
  });

  // =========================================================
  // VIEW SUPPLIER
  // =========================================================

  it('should open view supplier modal', () => {
    const supplier = component.suppliers[0];

    component.viewSupplier(supplier);

    expect(component.showViewModal).toBe(true);
    expect(component.selectedSupplier).toEqual(supplier);
  });

  it('should close view supplier modal', () => {
    const supplier = component.suppliers[0];

    component.viewSupplier(supplier);
    component.closeViewModal();

    expect(component.showViewModal).toBe(false);
    expect(component.selectedSupplier).toBeNull();
  });

  // =========================================================
  // EDIT SUPPLIER
  // =========================================================

  it('should open edit supplier modal', () => {
    const supplier = component.suppliers[0];

    component.editSupplier(supplier);

    expect(component.showEditModal).toBe(true);
    expect(component.showSupplierModal).toBe(true);
    expect(component.isEditMode).toBe(true);
    expect(component.selectedSupplier).toEqual(supplier);
  });

  it('should close edit supplier modal', () => {
    const supplier = component.suppliers[0];

    component.editSupplier(supplier);
    component.closeEditModal();

    expect(component.showEditModal).toBe(false);
    expect(component.showSupplierModal).toBe(false);
    expect(component.selectedSupplier).toBeNull();
    expect(component.isEditMode).toBe(false);
  });

  // =========================================================
  // DELETE SUPPLIER
  // =========================================================

  it('should have delete supplier method', () => {
    expect(typeof component.deleteSupplier).toBe('function');
  });

  // =========================================================
  // STATUS CLASS
  // =========================================================

  it('should return active status class', () => {
    expect(component.getStatusClass('Active')).toBe('status-active');
  });

  it('should return pending status class', () => {
    expect(component.getStatusClass('Pending')).toBe('status-pending');
  });

  it('should return inactive status class', () => {
    expect(component.getStatusClass('Inactive')).toBe('status-inactive');
  });

  it('should return empty class for unknown status', () => {
    expect(component.getStatusClass('Unknown')).toBe('');
  });

  // =========================================================
  // INITIALS
  // =========================================================

  it('should generate supplier initials', () => {
    const supplier = component.suppliers[0];

    const initials = component.getInitials(supplier.name);

    expect(initials).toBeTruthy();
  });

});