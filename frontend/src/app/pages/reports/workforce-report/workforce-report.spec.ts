import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkforceReportComponent } from './workforce-report';

describe('WorkforceReportComponent', () => {
  let component: WorkforceReportComponent;
  let fixture: ComponentFixture<WorkforceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkforceReportComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkforceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default selected project', () => {
    expect(component.selectedProject).toBe('Chennai Commercial Complex');
  });

  it('should have workforce data', () => {
    expect(component.workforce.length).toBeGreaterThan(0);
  });

  it('should have workforce summary values', () => {
    expect(component.totalWorkers).toBe(1250);
    expect(component.allocatedWorkers).toBe(1180);
    expect(component.presentWorkers).toBe(1085);
    expect(component.absentWorkers).toBe(95);
    expect(component.leaveWorkers).toBe(70);
    expect(component.attendancePercentage).toBe(86.8);
  });
});