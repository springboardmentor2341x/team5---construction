import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrProcurementCategoriesComponent } from './pr-procurement-categories';

describe('PrProcurementCategoriesComponent', () => {

  let component: PrProcurementCategoriesComponent;
  let fixture: ComponentFixture<PrProcurementCategoriesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PrProcurementCategoriesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      PrProcurementCategoriesComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have procurement categories', () => {
    expect(component.categories).toBeDefined();
    expect(component.categories.length).toBeGreaterThan(0);
  });

  it('should contain all required procurement categories', () => {

    const categoryNames = component.categories.map(
      (category: any) => category.categoryName
    );

    expect(categoryNames).toContain('Raw Materials');
    expect(categoryNames).toContain('Equipment');
    expect(categoryNames).toContain('Machinery');
    expect(categoryNames).toContain('Safety Equipment');
    expect(categoryNames).toContain('Office Supplies');

  });

  it('should have all categories active initially', () => {

    expect(component.activeCategories).toBe(5);
    expect(component.inactiveCategories).toBe(0);

  });

  it('should calculate total items correctly', () => {

    expect(component.totalItems).toBe(130);

  });

  it('should calculate total active requests correctly', () => {

    expect(component.totalActiveRequests).toBe(25);

  });

});