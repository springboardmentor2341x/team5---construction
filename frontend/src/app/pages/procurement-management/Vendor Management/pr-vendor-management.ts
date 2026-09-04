import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  category: string;
  products: string;
  status: string;
}

@Component({
  selector: 'app-pr-vendor-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-vendor-management.html',
  styleUrl: './pr-vendor-management.css'
})
export class PrVendorManagementComponent {

  // ==============================
  // SUMMARY
  // ==============================

  totalVendors = 36;
  activeVendors = 28;
  pendingVendors = 5;
  vendorCategories = 5;


  // ==============================
  // SEARCH & FILTER
  // ==============================

  searchText = '';
  selectedCategory = 'All';
  selectedStatus = 'All';


  // ==============================
  // MODALS
  // ==============================

  showAddVendor = false;
  showViewVendor = false;


  // ==============================
  // EDITING
  // ==============================

  editingVendor: Vendor | null = null;
  selectedVendor: Vendor | null = null;


  // ==============================
  // FORM
  // ==============================

  vendorForm: Vendor = this.getEmptyVendor();


  // ==============================
  // VENDOR DATA
  // ==============================

  vendors: Vendor[] = [

    {
      id: 'VEN-001',
      name: 'ABC Building Supplies',
      contactPerson: 'Arun Kumar',
      contactNumber: '9876543210',
      email: 'abcbuilding@gmail.com',
      address: 'Chennai, Tamil Nadu',
      category: 'Raw Materials',
      products: 'Cement, Steel, Sand',
      status: 'Active'
    },

    {
      id: 'VEN-002',
      name: 'BuildTech Equipment',
      contactPerson: 'Rajesh Kumar',
      contactNumber: '9876501234',
      email: 'sales@buildtech.com',
      address: 'Guindy, Chennai',
      category: 'Equipment',
      products: 'Concrete Mixers, Tools',
      status: 'Active'
    },

    {
      id: 'VEN-003',
      name: 'Prime Machinery Ltd',
      contactPerson: 'Suresh Babu',
      contactNumber: '9840012345',
      email: 'info@primemachinery.com',
      address: 'Ambattur, Chennai',
      category: 'Machinery',
      products: 'Excavators, Cranes',
      status: 'Active'
    },

    {
      id: 'VEN-004',
      name: 'SafeGuard Industries',
      contactPerson: 'Priya Sharma',
      contactNumber: '9791012345',
      email: 'sales@safeguard.com',
      address: 'Porur, Chennai',
      category: 'Safety Equipment',
      products: 'Helmets, Safety Shoes',
      status: 'Active'
    },

    {
      id: 'VEN-005',
      name: 'OfficeMart Supplies',
      contactPerson: 'Karthik Raj',
      contactNumber: '9884012345',
      email: 'support@officemart.com',
      address: 'T Nagar, Chennai',
      category: 'Office Supplies',
      products: 'Stationery, Printers',
      status: 'Active'
    },

    {
      id: 'VEN-006',
      name: 'Metro Construction Materials',
      contactPerson: 'Vijay Anand',
      contactNumber: '9810012345',
      email: 'metro.materials@gmail.com',
      address: 'Tambaram, Chennai',
      category: 'Raw Materials',
      products: 'Bricks, Cement, Aggregates',
      status: 'Pending'
    },

    {
      id: 'VEN-007',
      name: 'Industrial Machinery Works',
      contactPerson: 'Manoj Kumar',
      contactNumber: '9894012345',
      email: 'contact@imw.com',
      address: 'Sriperumbudur, Tamil Nadu',
      category: 'Machinery',
      products: 'Generators, Heavy Machinery',
      status: 'Active'
    },

    {
      id: 'VEN-008',
      name: 'SafeBuild Solutions',
      contactPerson: 'Meena Devi',
      contactNumber: '9789012345',
      email: 'safebuild@gmail.com',
      address: 'Velachery, Chennai',
      category: 'Safety Equipment',
      products: 'Safety Jackets, Gloves',
      status: 'Inactive'
    }

  ];


  // ==============================
  // FILTERED VENDORS
  // ==============================

  filteredVendors: Vendor[] = [...this.vendors];


  // ==============================
  // EMPTY FORM
  // ==============================

  private getEmptyVendor(): Vendor {

    return {
      id: '',
      name: '',
      contactPerson: '',
      contactNumber: '',
      email: '',
      address: '',
      category: 'Raw Materials',
      products: '',
      status: 'Active'
    };

  }


  // ==============================
  // SEARCH + FILTER
  // ==============================

  filterVendors(): void {

    const search = this.searchText
      .toLowerCase()
      .trim();

    this.filteredVendors = this.vendors.filter((vendor) => {

      const matchesSearch =
        vendor.id.toLowerCase().includes(search) ||
        vendor.name.toLowerCase().includes(search) ||
        vendor.contactPerson.toLowerCase().includes(search) ||
        vendor.contactNumber.includes(search) ||
        vendor.email.toLowerCase().includes(search) ||
        vendor.category.toLowerCase().includes(search) ||
        vendor.products.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        vendor.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        vendor.status === this.selectedStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );

    });

  }


  // ==============================
  // STATUS CLASS
  // ==============================

  getStatusClass(status: string): string {

    switch (status) {

      case 'Active':
        return 'status-active';

      case 'Inactive':
        return 'status-inactive';

      case 'Pending':
        return 'status-pending';

      default:
        return '';

    }

  }


  // ==============================
  // ADD VENDOR
  // ==============================

  openAddVendor(): void {

    this.editingVendor = null;

    this.vendorForm = {
      ...this.getEmptyVendor(),
      id: this.generateVendorId()
    };

    this.showAddVendor = true;

  }


  // ==============================
  // CLOSE ADD / EDIT MODAL
  // ==============================

  closeAddVendor(): void {

    this.showAddVendor = false;
    this.editingVendor = null;

    this.vendorForm = this.getEmptyVendor();

  }


  // ==============================
  // VIEW VENDOR
  // ==============================

  viewVendor(vendor: Vendor): void {

    this.selectedVendor = {
      ...vendor
    };

    this.showViewVendor = true;

  }


  // ==============================
  // CLOSE VIEW
  // ==============================

  closeViewVendor(): void {

    this.showViewVendor = false;
    this.selectedVendor = null;

  }


  // ==============================
  // EDIT VENDOR
  // ==============================

  editVendor(vendor: Vendor): void {

    this.editingVendor = vendor;

    this.vendorForm = {
      ...vendor
    };

    this.showAddVendor = true;

  }


  // ==============================
  // SAVE / UPDATE VENDOR
  // ==============================

  saveVendor(): void {

    // Required field validation
    if (
      !this.vendorForm.name.trim() ||
      !this.vendorForm.contactPerson.trim() ||
      !this.vendorForm.contactNumber.trim() ||
      !this.vendorForm.email.trim()
    ) {

      alert('Please fill in all required fields.');

      return;

    }


    // EDIT EXISTING VENDOR
    if (this.editingVendor) {

      const index = this.vendors.findIndex(
        vendor => vendor.id === this.editingVendor!.id
      );

      if (index !== -1) {

        this.vendors[index] = {
          ...this.vendorForm
        };

        alert('Vendor updated successfully.');

      }

    }

    // ADD NEW VENDOR
    else {

      this.vendors.push({
        ...this.vendorForm
      });

      alert('Vendor added successfully.');

    }


    // Refresh table
    this.filterVendors();


    // Close modal
    this.showAddVendor = false;

    this.editingVendor = null;

    this.vendorForm = this.getEmptyVendor();

  }


  // ==============================
  // GENERATE VENDOR ID
  // ==============================

  private generateVendorId(): string {

    const nextNumber = this.vendors.length + 1;

    return `VEN-${String(nextNumber).padStart(3, '0')}`;

  }

}