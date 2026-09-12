import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmWorkforceAllocationComponent } from './wm-workforce-allocation';

describe('WmWorkforceAllocationComponent', () => {

  let component: WmWorkforceAllocationComponent;
  let fixture: ComponentFixture<WmWorkforceAllocationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        WmWorkforceAllocationComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmWorkforceAllocationComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('should have projects', () => {

    expect(component.projects.length).toBeGreaterThan(0);

  });


  it('should have workforce categories', () => {

    expect(component.categories.length).toBeGreaterThan(0);

  });


  it('should have contractors', () => {

    expect(component.contractors.length).toBeGreaterThan(0);

  });


  it('should have shifts', () => {

    expect(component.shifts.length).toBeGreaterThan(0);

  });


  it('should have work areas', () => {

    expect(component.workAreas.length).toBeGreaterThan(0);

  });


  it('should have workforce allocations', () => {

    expect(component.allocations.length).toBeGreaterThan(0);

  });


  it('should calculate active allocations', () => {

    expect(component.activeAllocations).toBe(4);

  });


  it('should calculate completed allocations', () => {

    expect(component.completedAllocations).toBe(1);

  });


  it('should calculate total allocations', () => {

    expect(component.totalAllocations).toBe(5);

  });


  it('should calculate project count', () => {

    expect(component.projectCount).toBe(4);

  });


  it('should return active status class', () => {

    expect(
      component.getStatusClass('Active')
    ).toBe('status-active');

  });


  it('should return completed status class', () => {

    expect(
      component.getStatusClass('Completed')
    ).toBe('status-completed');

  });


  it('should return pending status class', () => {

    expect(
      component.getStatusClass('Pending')
    ).toBe('status-pending');

  });


  it('should clear the allocation form', () => {

    component.selectedProject = 'Chennai Metro Construction';
    component.selectedCategory = 'Skilled Workers';
    component.selectedContractor = 'ABC Constructions';
    component.selectedShift = 'Morning Shift';
    component.selectedWorkArea = 'Concrete Work';
    component.selectedStartDate = '2026-08-20';
    component.selectedEndDate = '2026-09-20';

    component.clearForm();

    expect(component.selectedProject).toBe('');
    expect(component.selectedCategory).toBe('');
    expect(component.selectedContractor).toBe('');
    expect(component.selectedShift).toBe('');
    expect(component.selectedWorkArea).toBe('');
    expect(component.selectedStartDate).toBe('');
    expect(component.selectedEndDate).toBe('');

  });


  it('should add a new workforce allocation', () => {

    const initialCount =
      component.allocations.length;

    component.selectedProject =
      'Chennai Metro Construction';

    component.selectedCategory =
      'Skilled Workers';

    component.selectedContractor =
      'ABC Constructions';

    component.selectedShift =
      'Morning Shift';

    component.selectedWorkArea =
      'Concrete Work';

    component.allocateWorker();

    expect(
      component.allocations.length
    ).toBe(initialCount + 1);

  });


  it('should remove an allocation', () => {

    const initialCount =
      component.allocations.length;

    component.deleteAllocation(0);

    expect(
      component.allocations.length
    ).toBe(initialCount - 1);

  });

});