import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard';

describe('DashboardComponent', () => {

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const routerMock = {
      navigate: (commands: string[]) => Promise.resolve(true)
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        {
          provide: Router,
          useValue: routerMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have default project filter', () => {
    expect(component.selectedProject).toBe('All Projects');
  });


  it('should have default period filter', () => {
    expect(component.selectedPeriod).toBe('Current Month');
  });


  it('should have default status filter', () => {
    expect(component.selectedStatus).toBe('All Status');
  });


  it('should initialize total reports', () => {
    expect(component.totalReports).toBe(0);
  });


  it('should initialize active projects', () => {
    expect(component.activeProjects).toBe(0);
  });


  it('should initialize pending reports', () => {
    expect(component.pendingReports).toBe(0);
  });


  it('should initialize last generated value', () => {
    expect(component.lastGenerated).toBe('—');
  });


  it('should contain six report categories', () => {
    expect(component.reportCategories.length).toBe(6);
  });


  it('should contain Project Progress report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Project Progress'
    );

    expect(report).toBeTruthy();
  });


  it('should contain Resource Utilization report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Resource Utilization'
    );

    expect(report).toBeTruthy();
  });


  it('should contain Workforce Report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Workforce Report'
    );

    expect(report).toBeTruthy();
  });


  it('should contain Procurement Report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Procurement Report'
    );

    expect(report).toBeTruthy();
  });


  it('should contain Budget Report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Budget Report'
    );

    expect(report).toBeTruthy();
  });


  it('should contain Project Summary Report', () => {

    const report = component.reportCategories.find(
      item => item.name === 'Project Summary Report'
    );

    expect(report).toBeTruthy();
  });


  it('should update project filter', () => {

    component.selectedProject =
      'Chennai Commercial Complex';

    expect(component.selectedProject)
      .toBe('Chennai Commercial Complex');
  });


  it('should update period filter', () => {

    component.selectedPeriod =
      'Last Month';

    expect(component.selectedPeriod)
      .toBe('Last Month');
  });


  it('should update status filter', () => {

    component.selectedStatus =
      'Delayed';

    expect(component.selectedStatus)
      .toBe('Delayed');
  });


  it('should apply filters without error', () => {

    expect(() => {
      component.applyFilters();
    }).not.toThrow();
  });


  it('should refresh reports without error', () => {

    expect(() => {
      component.refreshReports();
    }).not.toThrow();
  });


  it('should generate report without error', () => {

    expect(() => {
      component.generateReport();
    }).not.toThrow();
  });


  it('should export PDF without error', () => {

    expect(() => {
      component.exportPdf('Project Progress');
    }).not.toThrow();
  });


  it('should export Excel without error', () => {

    expect(() => {
      component.exportExcel('Budget Report');
    }).not.toThrow();
  });


  it('should view Project Progress report without error', () => {

    expect(() => {
      component.viewReport('Project Progress');
    }).not.toThrow();
  });


  it('should view Resource Utilization report without error', () => {

    expect(() => {
      component.viewReport('Resource Utilization');
    }).not.toThrow();
  });


  it('should view Workforce report without error', () => {

    expect(() => {
      component.viewReport('Workforce Report');
    }).not.toThrow();
  });


  it('should view Procurement report without error', () => {

    expect(() => {
      component.viewReport('Procurement Report');
    }).not.toThrow();
  });


  it('should view Budget report without error', () => {

    expect(() => {
      component.viewReport('Budget Report');
    }).not.toThrow();
  });


  it('should handle invalid report without error', () => {

    expect(() => {
      component.viewReport('Invalid Report');
    }).not.toThrow();
  });

});