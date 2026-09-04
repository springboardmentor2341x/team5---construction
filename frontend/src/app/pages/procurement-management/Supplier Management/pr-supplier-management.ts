import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Supplier {
  id: string;
  name: string;
  company?: string;
  contactPerson: string;
  phone: string;
  email: string;
  category: string;
  materials: string;
  material?: string;
  projects: number;
  rating: number;
  status: 'Active' | 'Pending' | 'Inactive';
  address?: string;
  notes?: string;
}

interface SupplierForm {
  id: string;
  name: string;
  company: string;
  contactPerson: string;
  phone: string;
  email: string;
  category: string;
  material: string;
  projects: number;
  rating: number;
  status: 'Active' | 'Pending' | 'Inactive';
  address: string;
  notes: string;
}

@Component({
  selector: 'app-pr-supplier-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-supplier-management.html',
  styleUrls: ['./pr-supplier-management.css']
})
export class PrSupplierManagementComponent {

  // =========================================================
  // SEARCH AND FILTERS
  // =========================================================

  searchText = '';

  selectedStatus = 'All';

  selectedCategory = 'All';

  selectedRating = '';

  // =========================================================
  // MODALS
  // =========================================================

  showAddModal = false;

  showViewModal = false;

  showEditModal = false;

  // Names used by the HTML
  showSupplierModal = false;

  isEditMode = false;

  // =========================================================
  // SELECTED SUPPLIER
  // =========================================================

  selectedSupplier: Supplier | null = null;

  // =========================================================
  // SUPPLIER FORM
  // =========================================================

  supplierForm: SupplierForm = this.createEmptyForm();

  // =========================================================
  // SUPPLIERS
  // =========================================================

  suppliers: Supplier[] = [
    {
      id: 'SUP-001',
      name: 'ABC Building Materials',
      contactPerson: 'Arun Kumar',
      phone: '+91 98765 43210',
      email: 'abcbuilding@gmail.com',
      category: 'Building Materials',
      materials: 'Cement, Bricks, Sand',
      projects: 8,
      rating: 4.8,
      status: 'Active',
      address: 'Chennai',
      notes: 'Reliable building material supplier'
    },

    {
      id: 'SUP-002',
      name: 'Sri Lakshmi Steel',
      contactPerson: 'Lakshmi Devi',
      phone: '+91 98432 15678',
      email: 'srilakshmisteel@gmail.com',
      category: 'Steel',
      materials: 'TMT Bars, Steel',
      projects: 6,
      rating: 4.6,
      status: 'Active',
      address: 'Chennai',
      notes: 'Steel supplier'
    },

    {
      id: 'SUP-003',
      name: 'Chennai Cement Traders',
      contactPerson: 'Ramesh Babu',
      phone: '+91 97910 22334',
      email: 'chennai.cement@gmail.com',
      category: 'Cement',
      materials: 'OPC, PPC Cement',
      projects: 5,
      rating: 4.5,
      status: 'Active',
      address: 'Chennai',
      notes: 'Cement supplier'
    },

    {
      id: 'SUP-004',
      name: 'Green Earth Aggregates',
      contactPerson: 'Suresh Raj',
      phone: '+91 98844 56789',
      email: 'greenearth@gmail.com',
      category: 'Aggregates',
      materials: 'M-Sand, Blue Metal',
      projects: 4,
      rating: 4.3,
      status: 'Pending',
      address: 'Chennai',
      notes: 'Aggregate materials supplier'
    },

    {
      id: 'SUP-005',
      name: 'Metro Electricals',
      contactPerson: 'Vijay Anand',
      phone: '+91 99520 34567',
      email: 'metroelectricals@gmail.com',
      category: 'Electrical',
      materials: 'Cables, Switches',
      projects: 7,
      rating: 4.7,
      status: 'Active',
      address: 'Chennai',
      notes: 'Electrical materials supplier'
    },

    {
      id: 'SUP-006',
      name: 'BuildPro Hardware',
      contactPerson: 'Karthik S',
      phone: '+91 97890 11223',
      email: 'buildpro@gmail.com',
      category: 'Hardware',
      materials: 'Tools, Fasteners',
      projects: 3,
      rating: 4.2,
      status: 'Active',
      address: 'Chennai',
      notes: 'Hardware and tools supplier'
    },

    {
      id: 'SUP-007',
      name: 'Prime Paints & Coatings',
      contactPerson: 'Manoj Kumar',
      phone: '+91 98123 45670',
      email: 'primepaints@gmail.com',
      category: 'Paints',
      materials: 'Interior, Exterior Paint',
      projects: 4,
      rating: 4.4,
      status: 'Pending',
      address: 'Chennai',
      notes: 'Paint supplier'
    },

    {
      id: 'SUP-008',
      name: 'SafeBuild Equipment',
      contactPerson: 'Naveen Kumar',
      phone: '+91 98650 33445',
      email: 'safebuild@gmail.com',
      category: 'Safety Equipment',
      materials: 'Helmets, Gloves, PPE',
      projects: 9,
      rating: 4.9,
      status: 'Active',
      address: 'Chennai',
      notes: 'Safety equipment supplier'
    },

    {
      id: 'SUP-009',
      name: 'Classic Tiles & Marble',
      contactPerson: 'Rahul Raj',
      phone: '+91 97788 44556',
      email: 'classictiles@gmail.com',
      category: 'Tiles',
      materials: 'Floor Tiles, Marble',
      projects: 5,
      rating: 4.5,
      status: 'Active',
      address: 'Chennai',
      notes: 'Tiles and marble supplier'
    },

    {
      id: 'SUP-010',
      name: 'Urban Plumbing Solutions',
      contactPerson: 'Prakash M',
      phone: '+91 98234 67890',
      email: 'urbanplumbing@gmail.com',
      category: 'Plumbing',
      materials: 'Pipes, Fittings',
      projects: 2,
      rating: 4.1,
      status: 'Inactive',
      address: 'Chennai',
      notes: 'Plumbing materials supplier'
    }
  ];

  // =========================================================
  // CATEGORIES
  // =========================================================

  categories: string[] = [
    'Building Materials',
    'Steel',
    'Cement',
    'Aggregates',
    'Electrical',
    'Hardware',
    'Paints',
    'Safety Equipment',
    'Tiles',
    'Plumbing'
  ];

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor() {

    // Add the names expected by the HTML
    this.suppliers = this.suppliers.map(supplier => ({
      ...supplier,
      company: supplier.company || supplier.name,
      material: supplier.material || supplier.materials
    }));
  }

  // =========================================================
  // FILTERED SUPPLIERS
  // =========================================================

  get filteredSuppliers(): Supplier[] {

    const search = this.searchText.trim().toLowerCase();

    return this.suppliers.filter(supplier => {

      const matchesSearch =
        !search ||
        supplier.id.toLowerCase().includes(search) ||
        supplier.name.toLowerCase().includes(search) ||
        (supplier.company || '').toLowerCase().includes(search) ||
        supplier.contactPerson.toLowerCase().includes(search) ||
        supplier.email.toLowerCase().includes(search) ||
        supplier.materials.toLowerCase().includes(search) ||
        (supplier.material || '').toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        this.selectedStatus === '' ||
        supplier.status === this.selectedStatus;

      const matchesCategory =
        this.selectedCategory === 'All' ||
        this.selectedCategory === '' ||
        supplier.category === this.selectedCategory;

      const matchesRating =
        !this.selectedRating ||
        supplier.rating >= Number(this.selectedRating);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesRating
      );
    });
  }

  // =========================================================
  // FILTER METHOD USED BY HTML
  // =========================================================

  filterSuppliers(): void {
    // filteredSuppliers is a getter,
    // so changing the filter values automatically updates the list.
  }

  // =========================================================
  // STATISTICS
  // =========================================================

  get totalSuppliers(): number {
    return this.suppliers.length;
  }

  get activeSuppliers(): number {
    return this.suppliers.filter(
      supplier => supplier.status === 'Active'
    ).length;
  }

  get pendingSuppliers(): number {
    return this.suppliers.filter(
      supplier => supplier.status === 'Pending'
    ).length;
  }

  get inactiveSuppliers(): number {
    return this.suppliers.filter(
      supplier => supplier.status === 'Inactive'
    ).length;
  }

  get materialSuppliers(): number {
    return this.suppliers.filter(
      supplier => supplier.materials.trim().length > 0
    ).length;
  }

  get totalMaterials(): number {
    const materials = new Set<string>();

    this.suppliers.forEach(supplier => {

      supplier.materials
        .split(',')
        .map(material => material.trim())
        .filter(material => material.length > 0)
        .forEach(material => materials.add(material));

    });

    return materials.size;
  }

  get averageRating(): number {

    if (this.suppliers.length === 0) {
      return 0;
    }

    const total = this.suppliers.reduce(
      (sum, supplier) => sum + supplier.rating,
      0
    );

    return Number(
      (total / this.suppliers.length).toFixed(1)
    );
  }

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  clearFilters(): void {

    this.searchText = '';

    this.selectedStatus = 'All';

    this.selectedCategory = 'All';

    this.selectedRating = '';
  }

  // =========================================================
  // ADD SUPPLIER
  // =========================================================

  openAddSupplier(): void {

    this.supplierForm = this.createEmptyForm();

    this.isEditMode = false;

    this.showSupplierModal = true;

    this.showAddModal = true;
  }

  closeSupplierModal(): void {

    this.showSupplierModal = false;

    this.showAddModal = false;

    this.isEditMode = false;
  }

  openAddModal(): void {
    this.openAddSupplier();
  }

  closeAddModal(): void {
    this.closeSupplierModal();
  }

  // =========================================================
  // SAVE SUPPLIER
  // =========================================================

  saveSupplier(): void {

    if (
      !this.supplierForm.name.trim() ||
      !this.supplierForm.company.trim() ||
      !this.supplierForm.contactPerson.trim() ||
      !this.supplierForm.phone.trim() ||
      !this.supplierForm.email.trim()
    ) {
      return;
    }

    if (this.isEditMode) {

      const index = this.suppliers.findIndex(
        supplier => supplier.id === this.supplierForm.id
      );

      if (index !== -1) {

        this.suppliers[index] = {
          ...this.suppliers[index],
          name: this.supplierForm.name,
          company: this.supplierForm.company,
          contactPerson: this.supplierForm.contactPerson,
          phone: this.supplierForm.phone,
          email: this.supplierForm.email,
          category: this.supplierForm.category,
          material: this.supplierForm.material,
          materials: this.supplierForm.material,
          projects: this.supplierForm.projects,
          rating: this.supplierForm.rating,
          status: this.supplierForm.status,
          address: this.supplierForm.address,
          notes: this.supplierForm.notes
        };
      }

    } else {

      const newId =
        `SUP-${String(this.suppliers.length + 1).padStart(3, '0')}`;

      const newSupplier: Supplier = {

        id: newId,

        name: this.supplierForm.name,

        company: this.supplierForm.company,

        contactPerson: this.supplierForm.contactPerson,

        phone: this.supplierForm.phone,

        email: this.supplierForm.email,

        category: this.supplierForm.category,

        materials: this.supplierForm.material,

        material: this.supplierForm.material,

        projects: Number(this.supplierForm.projects) || 0,

        rating: Number(this.supplierForm.rating) || 0,

        status: this.supplierForm.status,

        address: this.supplierForm.address,

        notes: this.supplierForm.notes
      };

      this.suppliers.unshift(newSupplier);
    }

    this.closeSupplierModal();
  }

  // =========================================================
  // VIEW SUPPLIER
  // =========================================================

  viewSupplier(supplier: Supplier): void {

    this.selectedSupplier = supplier;

    this.showViewModal = true;
  }

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedSupplier = null;
  }

  // =========================================================
  // EDIT SUPPLIER
  // =========================================================

  editSupplier(supplier: Supplier): void {

    this.selectedSupplier = {
      ...supplier
    };

    this.supplierForm = {

      id: supplier.id,

      name: supplier.name,

      company: supplier.company || supplier.name,

      contactPerson: supplier.contactPerson,

      phone: supplier.phone,

      email: supplier.email,

      category: supplier.category,

      material: supplier.material || supplier.materials,

      projects: supplier.projects,

      rating: supplier.rating,

      status: supplier.status,

      address: supplier.address || '',

      notes: supplier.notes || ''
    };

    this.isEditMode = true;

    this.showSupplierModal = true;

    this.showEditModal = true;
  }

  closeEditModal(): void {

    this.showEditModal = false;

    this.showSupplierModal = false;

    this.selectedSupplier = null;

    this.isEditMode = false;
  }

  updateSupplier(): void {
    this.saveSupplier();
    this.showEditModal = false;
  }

  // =========================================================
  // DELETE SUPPLIER
  // =========================================================

  deleteSupplier(supplier: Supplier): void {

    const confirmed = window.confirm(
      `Are you sure you want to delete ${supplier.name}?`
    );

    if (!confirmed) {
      return;
    }

    this.suppliers = this.suppliers.filter(
      item => item.id !== supplier.id
    );

    if (
      this.selectedSupplier &&
      this.selectedSupplier.id === supplier.id
    ) {

      this.selectedSupplier = null;

      this.showViewModal = false;

      this.showEditModal = false;

      this.showSupplierModal = false;
    }
  }

  // =========================================================
  // STATUS CLASS
  // =========================================================

  getStatusClass(status: string): string {

    switch (status) {

      case 'Active':
        return 'status-active';

      case 'Pending':
        return 'status-pending';

      case 'Inactive':
        return 'status-inactive';

      default:
        return '';
    }
  }

  // =========================================================
  // SUPPLIER INITIALS
  // =========================================================

  getInitials(name: string): string {

    if (!name) {
      return '';
    }

    const words = name
      .trim()
      .split(/\s+/);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    return (
      words[0].charAt(0) +
      words[1].charAt(0)
    ).toUpperCase();
  }

  // =========================================================
  // EMPTY FORM
  // =========================================================

  private createEmptyForm(): SupplierForm {

    return {

      id: '',

      name: '',

      company: '',

      contactPerson: '',

      phone: '',

      email: '',

      category: 'Building Materials',

      material: '',

      projects: 0,

      rating: 0,

      status: 'Active',

      address: '',

      notes: ''
    };
  }
}