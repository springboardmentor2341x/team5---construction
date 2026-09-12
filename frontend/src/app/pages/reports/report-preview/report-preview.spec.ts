import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportPreviewComponent } from './report-preview';

describe('ReportPreviewComponent', () => {
  let component: ReportPreviewComponent;
  let fixture: ComponentFixture<ReportPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportPreviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct report title', () => {
    expect(component.reportTitle).toBe('Project Summary Report');
  });

  it('should have project information', () => {
    expect(component.projectName).toBe('Chennai Commercial Complex');
    expect(component.projectCode).toBe('PRJ-001');
  });

  it('should have summary data', () => {
    expect(component.summary.length).toBeGreaterThan(0);
  });

  it('should have milestone data', () => {
    expect(component.milestones.length).toBeGreaterThan(0);
  });
});