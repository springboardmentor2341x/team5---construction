import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurementManagementTopNavbarComponent } from './procurement-management-top-navbar';

describe('ProcurementManagementTopNavbarComponent', () => {
  let component: ProcurementManagementTopNavbarComponent;
  let fixture: ComponentFixture<ProcurementManagementTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurementManagementTopNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ProcurementManagementTopNavbarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Procurement Management title', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent)
      .toContain('Procurement Management');
  });

  it('should display user name', () => {
    expect(component.userName).toBe('Procurement Manager');
  });

  it('should display user role', () => {
    expect(component.userRole).toBe('Procurement Management');
  });

  it('should have notification count', () => {
    expect(component.notificationCount).toBeGreaterThanOrEqual(0);
  });
});