import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceUtilizationReportComponent } from './resource-utilization-report';

describe('ResourceUtilizationReportComponent', () => {
  let component: ResourceUtilizationReportComponent;
  let fixture: ComponentFixture<ResourceUtilizationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceUtilizationReportComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ResourceUtilizationReportComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default selected project', () => {
    expect(component.selectedProject).toBe(
      'Chennai Commercial Complex'
    );
  });

  it('should have resource data', () => {
    expect(component.resources.length).toBeGreaterThan(0);
  });

  it('should have resource summary values', () => {
    expect(component.totalResources).toBe(15);
    expect(component.allocatedResources).toBe(11);
    expect(component.availableResources).toBe(4);
    expect(component.averageUtilization).toBe(79);
  });
});