import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



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
}



@Component({
  selector: 'app-daily-material-used',
  imports: [CommonModule,FormsModule],
  templateUrl: './daily-material-used.html',
  styleUrl: './daily-material-used.css',
})
export class DailyMaterialUsed {


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
     NEW MATERIAL FORM
  ===================================================== */

  material: MaterialUsage = {

    id: 0,

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

  materials: MaterialUsage[] = [

    {
      id: 1,
      date: '08 Aug 2026',
      materialName: 'Cement',
      category: 'Construction Material',
      project: 'City Mall Construction',
      quantityUsed: 300,
      unit: 'Bags',
      activity: 'Foundation Work',
      usedBy: 'Site Engineer',
      remarks: 'Used for foundation concrete work.'
    },

    {
      id: 2,
      date: '08 Aug 2026',
      materialName: 'Steel Rods',
      category: 'Construction Material',
      project: 'City Mall Construction',
      quantityUsed: 2,
      unit: 'Tons',
      activity: 'Structural Work',
      usedBy: 'Site Engineer',
      remarks: 'Used for column reinforcement.'
    },

    {
      id: 3,
      date: '08 Aug 2026',
      materialName: 'Sand',
      category: 'Construction Material',
      project: 'City Mall Construction',
      quantityUsed: 5,
      unit: 'Tons',
      activity: 'Concrete Work',
      usedBy: 'Site Engineer',
      remarks: 'Used for concrete mixing.'
    },

    {
      id: 4,
      date: '07 Aug 2026',
      materialName: 'Bricks',
      category: 'Construction Material',
      project: 'Green Valley Residential Project',
      quantityUsed: 1500,
      unit: 'Pieces',
      activity: 'Wall Construction',
      usedBy: 'Site Engineer',
      remarks: 'Used for ground floor wall construction.'
    },

    {
      id: 5,
      date: '07 Aug 2026',
      materialName: 'Concrete',
      category: 'Construction Material',
      project: 'Highway Expansion Project',
      quantityUsed: 12,
      unit: 'Cubic Meter',
      activity: 'Road Construction',
      usedBy: 'Site Engineer',
      remarks: 'Used for road slab work.'
    }

  ];


  /* =====================================================
     OPEN ADD MATERIAL MODAL
  ===================================================== */

  openAddMaterial(): void {

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
     SAVE MATERIAL USAGE
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


    const newMaterial: MaterialUsage = {

      id: this.materials.length > 0
        ? Math.max(...this.materials.map(m => m.id)) + 1
        : 1,

      date: this.material.date,

      materialName: this.material.materialName,

      category: this.material.category,

      project: this.material.project,

      quantityUsed: Number(this.material.quantityUsed),

      unit: this.material.unit,

      activity: this.material.activity,

      usedBy: this.material.usedBy || 'Site Engineer',

      remarks: this.material.remarks

    };


    this.materials.unshift(newMaterial);


    this.resetMaterialForm();

    this.showAddMaterialModal = false;

  }


  /* =====================================================
     RESET FORM
  ===================================================== */

  resetMaterialForm(): void {

    this.material = {

      id: 0,

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
     TOTAL MATERIAL ENTRIES
  ===================================================== */

  get totalEntries(): number {

    return this.materials.length;

  }


  /* =====================================================
     TODAY'S MATERIAL ENTRIES
  ===================================================== */

  get materialsUsedToday(): number {

    const today = '08 Aug 2026';

    return this.materials.filter(

      material => material.date === today

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

    const today = '08 Aug 2026';

    return this.materials

      .filter(material => material.date === today)

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
}
