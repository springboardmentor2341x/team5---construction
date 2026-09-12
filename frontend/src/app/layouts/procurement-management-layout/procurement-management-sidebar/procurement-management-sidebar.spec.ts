import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurementManagementSidebarComponent } from './procurement-management-sidebar';

describe('ProcurementManagementSidebarComponent', () => {
  let component: ProcurementManagementSidebarComponent;
  let fixture: ComponentFixture<ProcurementManagementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurementManagementSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ProcurementManagementSidebarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 8 procurement menu items', () => {
    expect(component.menuItems.length).toBe(8);
  });

  it('should contain all required procurement pages', () => {
    const names = component.menuItems.map(item => item.name);

    expect(names).toContain('Dashboard');
    expect(names).toContain('Vendor Management');
    expect(names).toContain('Procurement Requests');
    expect(names).toContain('Purchase Orders');
    expect(names).toContain('Supplier Management');
    expect(names).toContain('Invoice Tracking');
    expect(names).toContain('Procurement Categories');
    expect(names).toContain('Procurement Reports');
  });
});