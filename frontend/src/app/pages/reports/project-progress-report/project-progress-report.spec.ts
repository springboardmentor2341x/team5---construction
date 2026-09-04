import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProjectProgressReportComponent } from './project-progress-report';

describe('ProjectProgressReportComponent', () => {

  let component: ProjectProgressReportComponent;
  let fixture: ComponentFixture<ProjectProgressReportComponent>;


  beforeEach(async () => {

    const routerMock = {
      navigate: (commands: string[]) => Promise.resolve(true)
    };


    await TestBed.configureTestingModule({

      imports: [
        ProjectProgressReportComponent
      ],

      providers: [
        {
          provide: Router,
          useValue: routerMock
        }
      ]

    }).compileComponents();


    fixture =
      TestBed.createComponent(
        ProjectProgressReportComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('should have default project', () => {

    expect(component.selectedProject)
      .toBe('Chennai Commercial Complex');

  });


  it('should have default reporting period', () => {

    expect(component.selectedPeriod)
      .toBe('Current Month');

  });


  it('should have default status filter', () => {

    expect(component.selectedStatus)
      .toBe('All Status');

  });


  it('should initialize project information', () => {

    expect(component.project.name)
      .toBe('Chennai Commercial Complex');

  });


  it('should initialize project progress', () => {

    expect(component.project.progress)
      .toBe(68);

  });


  it('should initialize work completion', () => {

    expect(component.workCompleted)
      .toBe(68);

  });


  it('should contain milestones', () => {

    expect(component.milestones.length)
      .toBeGreaterThan(0);

  });


  it('should contain work completion items', () => {

    expect(component.workItems.length)
      .toBeGreaterThan(0);

  });


  it('should contain delay records', () => {

    expect(component.delays.length)
      .toBeGreaterThan(0);

  });


  it('should initialize delayed activities', () => {

    expect(component.delayedActivities)
      .toBe(2);

  });


  it('should initialize days behind', () => {

    expect(component.daysBehind)
      .toBe(4);

  });


  it('should run applyFilters without error', () => {

    expect(() => component.applyFilters())
      .not.toThrow();

  });


  it('should run downloadPdf without error', () => {

    expect(() => component.downloadPdf())
      .not.toThrow();

  });


  it('should run exportExcel without error', () => {

    expect(() => component.exportExcel())
      .not.toThrow();

  });


  it('should run goBack without error', () => {

    expect(() => component.goBack())
      .not.toThrow();

  });

});