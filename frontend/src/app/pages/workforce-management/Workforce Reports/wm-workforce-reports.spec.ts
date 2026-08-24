import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmWorkforceReportsComponent } from './wm-workforce-reports';

describe('WmWorkforceReportsComponent', () => {

  let component: WmWorkforceReportsComponent;
  let fixture: ComponentFixture<WmWorkforceReportsComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WmWorkforceReportsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmWorkforceReportsComponent
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
  // PAGE TITLE
  // =====================================================

  it('should display Workforce Reports page', () => {

    const compiled =
      fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('h1')?.textContent
    ).toContain('Workforce Reports');

  });


  // =====================================================
  // SUMMARY CARDS
  // =====================================================

  it('should display summary cards', () => {

    const compiled =
      fixture.nativeElement as HTMLElement;

    const cards =
      compiled.querySelectorAll('.summary-card');

    expect(cards.length)
      .toBe(4);

  });


  // =====================================================
  // REPORT GENERATOR
  // =====================================================

  it('should display report generator section', () => {

    const compiled =
      fixture.nativeElement as HTMLElement;

    expect(
      compiled.textContent
    ).toContain('Report Generator');

  });


  // =====================================================
  // REPORT TYPES
  // =====================================================

  it('should have report types', () => {

    expect(component.reportTypes)
      .toBeTruthy();

    expect(component.reportTypes.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // PROJECTS
  // =====================================================

  it('should have projects', () => {

    expect(component.projects)
      .toBeTruthy();

    expect(component.projects.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // WORKFORCE CATEGORIES
  // =====================================================

  it('should have workforce categories', () => {

    expect(component.categories)
      .toBeTruthy();

    expect(component.categories.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // WORKFORCE RECORDS
  // =====================================================

  it('should have workforce records', () => {

    expect(component.workforceRecords)
      .toBeTruthy();

    expect(component.workforceRecords.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // REPORT TABLE
  // =====================================================

  it('should display workforce report table', () => {

    const compiled =
      fixture.nativeElement as HTMLElement;

    const table =
      compiled.querySelector('table');

    expect(table)
      .toBeTruthy();

  });


  // =====================================================
  // REPORT TABLE HEADERS
  // =====================================================

  it('should display report table headers', () => {

    const compiled =
      fixture.nativeElement as HTMLElement;

    const headers =
      compiled.querySelectorAll('thead th');

    expect(headers.length)
      .toBe(11);

  });


  // =====================================================
  // VIEW REPORT
  // =====================================================

  it('should have viewReport method', () => {

    expect(component.viewReport)
      .toBeDefined();

  });


  // =====================================================
  // GENERATE REPORT METHOD
  // =====================================================

  it('should have generateReport method', () => {

    expect(component.generateReport)
      .toBeDefined();

  });


  // =====================================================
  // FILTER REPORT METHOD
  // =====================================================

  it('should have filterReport method', () => {

    expect(component.filterReport)
      .toBeDefined();

  });


  // =====================================================
  // EXPORT REPORT METHOD
  // =====================================================

  it('should have exportReport method', () => {

    expect(component.exportReport)
      .toBeDefined();

  });


  // =====================================================
  // STATUS CLASS
  // =====================================================

  it('should return a status class', () => {

    const result =
      component.getStatusClass('Active');

    expect(result)
      .toBeTruthy();

  });


  // =====================================================
  // ACTIVE STATUS
  // =====================================================

  it('should return active status class', () => {

    expect(
      component.getStatusClass('Active')
    ).toBe('status-active');

  });


  // =====================================================
  // INACTIVE STATUS
  // =====================================================

  it('should return inactive status class', () => {

    expect(
      component.getStatusClass('Inactive')
    ).toBe('status-inactive');

  });

});