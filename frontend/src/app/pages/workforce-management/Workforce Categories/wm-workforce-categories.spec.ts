import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmWorkforceCategoriesComponent } from './wm-workforce-categories';

describe('WmWorkforceCategoriesComponent', () => {

  let component: WmWorkforceCategoriesComponent;
  let fixture: ComponentFixture<WmWorkforceCategoriesComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        WmWorkforceCategoriesComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmWorkforceCategoriesComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  // =====================================================
  // COMPONENT CREATION
  // =====================================================

  it('should create', () => {

    expect(component).toBeTruthy();

  });


  // =====================================================
  // CATEGORY DATA
  // =====================================================

  it('should have workforce categories', () => {

    expect(component.categories.length)
      .toBeGreaterThan(0);

  });


  it('should calculate total categories correctly', () => {

    expect(component.totalCategories)
      .toBe(component.categories.length);

  });


  // =====================================================
  // WORKER COUNT
  // =====================================================

  it('should calculate total workers correctly', () => {

    const expectedTotal =
      component.categories.reduce(
        (total, category) =>
          total + category.workers,
        0
      );

    expect(component.totalWorkers)
      .toBe(expectedTotal);

  });


  // =====================================================
  // SKILLED WORKERS
  // =====================================================

  it('should calculate skilled workers correctly', () => {

    const expectedSkilled =
      component.categories
        .filter(
          category => category.type === 'Skilled'
        )
        .reduce(
          (total, category) =>
            total + category.workers,
          0
        );

    expect(component.skilledWorkers)
      .toBe(expectedSkilled);

  });


  // =====================================================
  // ACTIVE CATEGORIES
  // =====================================================

  it('should calculate active categories correctly', () => {

    const expectedActive =
      component.categories.filter(
        category => category.status === 'Active'
      ).length;

    expect(component.activeCategories)
      .toBe(expectedActive);

  });


  // =====================================================
  // STATUS CLASS
  // =====================================================

  it('should return correct active status class', () => {

    expect(
      component.getStatusClass('Active')
    ).toBe('status-active');

  });


  it('should return correct inactive status class', () => {

    expect(
      component.getStatusClass('Inactive')
    ).toBe('status-inactive');

  });


  it('should return empty class for unknown status', () => {

    expect(
      component.getStatusClass('Unknown')
    ).toBe('');

  });


  // =====================================================
  // CLEAR FORM
  // =====================================================

  it('should clear the form', () => {

    component.categoryName =
      'Test Category';

    component.workforceType =
      'Skilled';

    component.skillLevel =
      'Advanced';

    component.workerCount =
      10;

    component.dailyWage =
      900;

    component.overtimeRate =
      120;

    component.categoryStatus =
      'Inactive';

    component.description =
      'Test description';


    component.clearForm();


    expect(component.categoryName)
      .toBe('');

    expect(component.workforceType)
      .toBe('');

    expect(component.skillLevel)
      .toBe('');

    expect(component.workerCount)
      .toBe(0);

    expect(component.dailyWage)
      .toBe(0);

    expect(component.overtimeRate)
      .toBe(0);

    expect(component.categoryStatus)
      .toBe('Active');

    expect(component.description)
      .toBe('');

  });


  // =====================================================
  // SAVE CATEGORY
  // =====================================================

  it('should add a new workforce category', () => {

    const initialCount =
      component.categories.length;


    component.categoryName =
      'Test Workers';

    component.workforceType =
      'Skilled';

    component.skillLevel =
      'Advanced';

    component.workerCount =
      15;

    component.dailyWage =
      850;

    component.overtimeRate =
      120;

    component.categoryStatus =
      'Active';


    component.saveCategory();


    expect(component.categories.length)
      .toBe(initialCount + 1);


    expect(
      component.categories[
        component.categories.length - 1
      ].name
    ).toBe('Test Workers');

  });


  // =====================================================
  // VIEW CATEGORY
  // =====================================================

  it('should have viewCategory method', () => {

    expect(component.viewCategory)
      .toBeDefined();

  });


  // =====================================================
  // EDIT CATEGORY
  // =====================================================

  it('should load category details for editing', () => {

    const category =
      component.categories[0];


    component.editCategory(category);


    expect(component.categoryName)
      .toBe(category.name);

    expect(component.workforceType)
      .toBe(category.type);

    expect(component.skillLevel)
      .toBe(category.skillLevel);

    expect(component.workerCount)
      .toBe(category.workers);

    expect(component.dailyWage)
      .toBe(category.dailyWage);

    expect(component.overtimeRate)
      .toBe(category.overtimeRate);

    expect(component.categoryStatus)
      .toBe(category.status);

  });


  // =====================================================
  // DELETE CATEGORY
  // =====================================================

  it('should have deleteCategory method', () => {

    expect(component.deleteCategory)
      .toBeDefined();

  });


  // =====================================================
  // CATEGORY DATA INTEGRITY
  // =====================================================

  it('should contain valid category data', () => {

    component.categories.forEach(category => {

      expect(category.id)
        .toBeTruthy();

      expect(category.name)
        .toBeTruthy();

      expect(category.type)
        .toBeTruthy();

      expect(category.workers)
        .toBeGreaterThanOrEqual(0);

      expect(category.dailyWage)
        .toBeGreaterThanOrEqual(0);

      expect(category.overtimeRate)
        .toBeGreaterThanOrEqual(0);

      expect(category.status)
        .toBeTruthy();

    });

  });

});