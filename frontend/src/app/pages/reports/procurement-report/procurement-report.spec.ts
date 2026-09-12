import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurementReportComponent } from './procurement-report';

describe('ProcurementReportComponent', () => {
  let component: ProcurementReportComponent;
  let fixture: ComponentFixture<ProcurementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurementReportComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcurementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default selected project', () => {
    expect(component.selectedProject).toBe('Chennai Commercial Complex');
  });

  it('should have procurement data', () => {
    expect(component.procurementRecords.length).toBeGreaterThan(0);
  });

  it('should have procurement summary values', () => {
    expect(component.totalRequests).toBe(48);
    expect(component.approvedRequests).toBe(35);
    expect(component.pendingRequests).toBe(7);
    expect(component.totalProcurementValue).toBe(18500000);
  });
});