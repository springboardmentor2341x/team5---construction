import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkforceManagementSidebarComponent } from './workforce-management-sidebar';

describe('WorkforceManagementSidebarComponent', () => {

  let component: WorkforceManagementSidebarComponent;
  let fixture: ComponentFixture<WorkforceManagementSidebarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WorkforceManagementSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkforceManagementSidebarComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have menu items', () => {
    expect(component.menuItems.length).toBeGreaterThan(0);
  });


  it('should contain Dashboard', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Dashboard'
      )
    ).toBe(true);
  });


  it('should contain Worker Registration', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Worker Registration'
      )
    ).toBe(true);
  });


  it('should contain Workforce Categories', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Workforce Categories'
      )
    ).toBe(true);
  });


  it('should contain Workforce Allocation', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Workforce Allocation'
      )
    ).toBe(true);
  });


  it('should contain Attendance Tracking', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Attendance Tracking'
      )
    ).toBe(true);
  });


  it('should contain Shift Scheduling', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Shift Scheduling'
      )
    ).toBe(true);
  });


  it('should contain Payroll Monitoring', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Payroll Monitoring'
      )
    ).toBe(true);
  });


  it('should contain Workforce Reports', () => {
    expect(
      component.menuItems.some(
        item => item.label === 'Workforce Reports'
      )
    ).toBe(true);
  });

});