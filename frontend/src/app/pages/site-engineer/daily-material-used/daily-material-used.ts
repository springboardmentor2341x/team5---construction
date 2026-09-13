import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MaterialService,
  Material,
  MaterialCreate
} from '../../../services/material.service';

interface MaterialUsage {
  id: number;
  
  date: string;
  materialName: string;
  category: string;
  project: string;
  quantityUsed: number;
  unit: string;
  activity: string;
  usedBy: string;
  remarks: string;

  // Backend material ID
  materialId: number;
}

@Component({
  selector: 'app-daily-material-used',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-material-used.html',
  styleUrl: './daily-material-used.css'
})
export class DailyMaterialUsed implements OnInit {

  private materialService = inject(MaterialService);
constructor(private cdr:ChangeDetectorRef){}
  /* =====================================================
     SEARCH & FILTER
  ===================================================== */

  searchText = '';

  selectedCategory = 'All';

  selectedProject = 'All';

  selectedDate = '';


  /* =====================================================
     ADD MATERIAL MODAL
  ===================================================== */

  showAddMaterialModal = false;


  /* =====================================================
     API STATE
  ===================================================== */

  isLoading = false;

  isSaving = false;

  isDeleting = false;


  /* =====================================================
     NEW MATERIAL FORM
  ===================================================== */

  material: MaterialUsage = {
    id: 0,
    materialId: 0,
    date: '',
    materialName: '',
    category: '',
    project: '',
    quantityUsed: 0,
    unit: '',
    activity: '',
    usedBy: 'Site Engineer',
    remarks: ''
  };


  /* =====================================================
     MATERIAL USAGE DATA
  ===================================================== */

  materials: MaterialUsage[] = [];
availableMaterials: Material[] = [];

  /* =====================================================
     COMPONENT INIT
  ===================================================== */

  ngOnInit(): void {
    this.loadMaterials();
  }


  /* =====================================================
     GET MATERIALS
     GET /materials/
  ===================================================== */

  loadMaterials(): void {

    this.isLoading = true;

    this.materialService.getAllMaterials().subscribe({

      next: (response: Material[]) => {
         this.availableMaterials = response;

        this.materials = response.map((material, index) => ({
          id: index + 1,

          materialId: material.material_id,

          date: this.formatApiDate(material.created_at),

          materialName: material.material_name,

          category: this.getCategory(material.material_name),

          project: 'Not Assigned',

          quantityUsed: 0,

          unit: this.formatUnit(material.unit),

          activity: 'Not Assigned',

          usedBy: 'Site Engineer',

          remarks: ''

        }));

        this.isLoading = false;
        this.cdr.detectChanges()
      },

      error: (error) => {

        console.error('Error loading materials:', error);

        this.isLoading = false;

        alert(
          error?.error?.detail ||
          'Unable to load materials.'
        );
      }

    });
  }


  /* =====================================================
     OPEN ADD MATERIAL MODAL
  ===================================================== */

  openAddMaterial(): void {

    this.resetMaterialForm();

    this.showAddMaterialModal = true;
  }


  /* =====================================================
     CLOSE ADD MATERIAL MODAL
  ===================================================== */

  closeAddMaterial(): void {

    this.showAddMaterialModal = false;

    this.resetMaterialForm();
  }


  /* =====================================================
     SAVE MATERIAL
     POST /materials/
  ===================================================== */

  saveMaterial(): void {

    if (
      !this.material.date ||
      !this.material.materialName ||
      !this.material.category ||
      !this.material.project ||
      !this.material.quantityUsed ||
      !this.material.unit ||
      !this.material.activity
    ) {

      alert('Please fill all required fields.');

      return;
    }


    /*
     * API POST body:
     *
     * {
     *   material_name: string,
     *   unit: string,
     *   status: string
     * }
     */

    const materialData: MaterialCreate = {

      material_name: this.material.materialName.trim(),

       unit: this.getApiUnit(this.material.unit),
        
      status: 'ACTIVE'

    };


    this.isSaving = true;


    this.materialService.createMaterial(materialData).subscribe({

      next: (response: Material) => {

        console.log('Material created successfully:', response);


        /*
         * API response ko UI record mein convert kar rahe hain.
         */

        const newMaterial: MaterialUsage = {

          id: response.material_id,

          materialId: response.material_id,

          date: this.formatDisplayDate(this.material.date),

          materialName: response.material_name,

          category: this.material.category,

          project: this.material.project,

          quantityUsed: Number(this.material.quantityUsed),

          unit: this.formatUnit(response.unit),

          activity: this.material.activity,

          usedBy: this.material.usedBy || 'Site Engineer',

          remarks: this.material.remarks

        };


        /*
         * New record sabse upar show hoga.
         */

        this.materials.unshift(newMaterial);


        this.isSaving = false;

        this.showAddMaterialModal = false;

        this.resetMaterialForm();


        alert('Material created successfully.');
        this.cdr.detectChanges()
      },


      error: (error) => {

        console.error('Error creating material:', error);

        this.isSaving = false;


        const message =
          error?.error?.detail?.[0]?.msg ||
          error?.error?.detail ||
          'Unable to create material.';


        alert(message);
      }

    });
  }


  /* =====================================================
     DELETE MATERIAL
     DELETE /materials/{material_id}
  ===================================================== */

  deleteMaterial(material: MaterialUsage): void {

    if (!material.materialId) {

      alert('Material ID not found.');

      return;
    }


    const confirmed = confirm(
      `Are you sure you want to delete "${material.materialName}"?`
    );


    if (!confirmed) {
      return;
    }


    this.isDeleting = true;


    this.materialService
      .deleteMaterial(material.materialId)
      .subscribe({

        next: (response) => {

          console.log('Material deleted successfully:', response);


          /*
           * API successful hone ke baad
           * local table se bhi remove kar do.
           */

          this.materials = this.materials.filter(
            item => item.materialId !== material.materialId
          );


          this.isDeleting = false;


          alert('Material deleted successfully.');
          this.cdr.detectChanges()
        },


        error: (error) => {

          console.error('Error deleting material:', error);

          this.isDeleting = false;


          const message =
            error?.error?.detail ||
            'Unable to delete material.';


          alert(message);

          this.cdr.detectChanges()
        }

      });
      this.cdr.detectChanges()
  }


  /* =====================================================
     RESET FORM
  ===================================================== */

  resetMaterialForm(): void {

    this.material = {

      id: 0,

      materialId: 0,

      date: '',

      materialName: '',

      category: '',

      project: '',

      quantityUsed: 0,

      unit: '',

      activity: '',

      usedBy: 'Site Engineer',

      remarks: ''

    };
  }


  /* =====================================================
     FILTERED MATERIALS
  ===================================================== */

  get filteredMaterials(): MaterialUsage[] {

    const search = this.searchText
      .toLowerCase()
      .trim();


    return this.materials.filter(material => {

      const matchesSearch =

        material.materialName
          .toLowerCase()
          .includes(search)

        ||

        material.project
          .toLowerCase()
          .includes(search)

        ||

        material.activity
          .toLowerCase()
          .includes(search);


      const matchesCategory =

        this.selectedCategory === 'All'

        ||

        material.category === this.selectedCategory;


      const matchesProject =

        this.selectedProject === 'All'

        ||

        material.project === this.selectedProject;


      const matchesDate =

        !this.selectedDate

        ||

        this.convertDateForInput(material.date) === this.selectedDate;


      return (

        matchesSearch &&

        matchesCategory &&

        matchesProject &&

        matchesDate

      );

    });
    
  }


  /* =====================================================
     DATE CONVERSION
  ===================================================== */

  convertDateForInput(date: string): string {

    const parts = date.split(' ');


    if (parts.length !== 3) {
      return '';
    }


    const day = parts[0];

    const month = parts[1];

    const year = parts[2];


    const months: { [key: string]: string } = {

      Jan: '01',

      Feb: '02',

      Mar: '03',

      Apr: '04',

      May: '05',

      Jun: '06',

      Jul: '07',

      Aug: '08',

      Sep: '09',

      Oct: '10',

      Nov: '11',

      Dec: '12'

    };


    return `${year}-${months[month]}-${day.padStart(2, '0')}`;
    
  }


  /* =====================================================
     API DATE → UI DATE
  ===================================================== */

  formatApiDate(date: string): string {

    if (!date) {
      return '';
    }


    const parsedDate = new Date(date);


    if (isNaN(parsedDate.getTime())) {
      return '';
    }


    return parsedDate.toLocaleDateString('en-GB', {

      day: '2-digit',

      month: 'short',

      year: 'numeric'

    });
  }


  /* =====================================================
     INPUT DATE → UI DATE
  ===================================================== */

  formatDisplayDate(date: string): string {

    if (!date) {
      return '';
    }


    const parsedDate = new Date(`${date}T00:00:00`);


    if (isNaN(parsedDate.getTime())) {
      return date;
    }


    return parsedDate.toLocaleDateString('en-GB', {

      day: '2-digit',

      month: 'short',

      year: 'numeric'

    });

   
  }


  /* =====================================================
     API UNIT → UI UNIT
  ===================================================== */

  formatUnit(unit: string): string {

    const units: { [key: string]: string } = {

      BAG: 'Bags',

      TON: 'Tons',

      KG: 'Kg',

      PIECE: 'Pieces',

      CUBIC_METER: 'Cubic Meter',

      LITER: 'Liters',

      UNIT: 'Units'

    };


    return units[unit] || unit;
  }


  /* =====================================================
     UI UNIT → API UNIT
  ===================================================== */

  getApiUnit(unit: string): string {

    const units: { [key: string]: string } = {

      Bags: 'BAG',

      Tons: 'TON',

      Kg: 'KG',

      Pieces: 'PIECE',

      'Cubic Meter': 'CUBIC_METER',

      Liters: 'LITER',

      Units: 'UNIT'

    };


    return units[unit] || unit;
  }


  /* =====================================================
     MATERIAL CATEGORY
  ===================================================== */

  getCategory(materialName: string): string {

    const name = materialName.toLowerCase();


    if (
      name.includes('steel') ||
      name.includes('rod') ||
      name.includes('rebar')
    ) {

      return 'Steel';
    }


    if (
      name.includes('cement') ||
      name.includes('sand') ||
      name.includes('brick')
    ) {

      return 'Construction Material';
    }


    if (name.includes('concrete')) {

      return 'Concrete';
    }


    return 'Other';
  }


  /* =====================================================
     TOTAL MATERIAL ENTRIES
  ===================================================== */

  get totalEntries(): number {

    return this.materials.length;
  }


  /* =====================================================
     TODAY'S MATERIAL ENTRIES
  ===================================================== */

  get materialsUsedToday(): number {

    const today = new Date();

    const todayString = today.toLocaleDateString('en-GB', {

      day: '2-digit',

      month: 'short',

      year: 'numeric'

    });


    return this.materials.filter(

      material => material.date === todayString

    ).length;
  }


  /* =====================================================
     TOTAL QUANTITY CONSUMED
  ===================================================== */

  get totalQuantityConsumed(): number {

    return this.materials.reduce(

      (total, material) =>

        total + Number(material.quantityUsed),

      0

    );
  }


  /* =====================================================
     UNIQUE PROJECTS
  ===================================================== */

  get projects(): string[] {

    return [

      'All',

      ...new Set(

        this.materials.map(

          material => material.project

        )

      )

    ];
  }


  /* =====================================================
     MATERIAL CATEGORIES
  ===================================================== */

  get categories(): string[] {

    return [

      'All',

      ...new Set(

        this.materials.map(

          material => material.category

        )

      )

    ];
  }


  /* =====================================================
     TODAY'S TOTAL USAGE
  ===================================================== */

  get todayTotalUsage(): number {

    const today = new Date();

    const todayString = today.toLocaleDateString('en-GB', {

      day: '2-digit',

      month: 'short',

      year: 'numeric'

    });


    return this.materials

      .filter(

        material => material.date === todayString

      )

      .reduce(

        (total, material) =>

          total + Number(material.quantityUsed),

        0

      );
      
  }


  /* =====================================================
     CLEAR FILTERS
  ===================================================== */

  clearFilters(): void {

    this.searchText = '';

    this.selectedCategory = 'All';

    this.selectedProject = 'All';

    this.selectedDate = '';
  }


  onMaterialSelected(materialId: number): void {

    const selectedMaterial = this.availableMaterials.find(
      material => material.material_id === Number(materialId)
    );

    if (!selectedMaterial) {
      this.material.materialName = '';
      this.material.unit = '';
      return;
    }

    this.material.materialName = selectedMaterial.material_name;

    this.material.unit = this.formatUnit(selectedMaterial.unit);

    this.material.materialId = selectedMaterial.material_id;

    // Category automatically set
    this.material.category = this.getCategory(
      selectedMaterial.material_name
    );
    this.cdr.detectChanges()
  }

}