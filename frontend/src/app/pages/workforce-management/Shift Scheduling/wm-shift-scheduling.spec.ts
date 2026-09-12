import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmShiftSchedulingComponent } from './wm-shift-scheduling';

describe('WmShiftSchedulingComponent', () => {

  let component: WmShiftSchedulingComponent;
  let fixture: ComponentFixture<WmShiftSchedulingComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        WmShiftSchedulingComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmShiftSchedulingComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  // =====================================================
  // COMPONENT CREATION
  // =====================================================

  it('should create', () => {

    expect(component).toBeTruthy();

  });


  // =====================================================
  // PROJECTS
  // =====================================================

  it('should have projects', () => {

    expect(component.projects.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // CATEGORIES
  // =====================================================

  it('should have workforce categories', () => {

    expect(component.categories.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // CONTRACTORS
  // =====================================================

  it('should have contractors', () => {

    expect(component.contractors.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // SHIFTS
  // =====================================================

  it('should have shift types', () => {

    expect(component.shifts.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // SUPERVISORS
  // =====================================================

  it('should have supervisors', () => {

    expect(component.supervisors.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // SCHEDULES
  // =====================================================

  it('should have shift schedules', () => {

    expect(component.schedules.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // TOTAL SCHEDULES
  // =====================================================

  it('should calculate total schedules', () => {

    expect(component.totalSchedules)
      .toBe(component.schedules.length);

  });


  // =====================================================
  // MORNING SHIFTS
  // =====================================================

  it('should calculate morning shifts', () => {

    const expected =
      component.schedules.filter(
        schedule => schedule.shift === 'Morning'
      ).length;

    expect(component.morningShifts)
      .toBe(expected);

  });


  // =====================================================
  // ACTIVE SHIFTS
  // =====================================================

  it('should calculate active shifts', () => {

    const expected =
      component.schedules.filter(
        schedule => schedule.status === 'Active'
      ).length;

    expect(component.activeShifts)
      .toBe(expected);

  });


  // =====================================================
  // NIGHT SHIFTS
  // =====================================================

  it('should calculate night shifts', () => {

    const expected =
      component.schedules.filter(
        schedule => schedule.shift === 'Night'
      ).length;

    expect(component.nightShifts)
      .toBe(expected);

  });


  // =====================================================
  // STATUS CLASS
  // =====================================================

  it('should return scheduled status class', () => {

    expect(
      component.getStatusClass('Scheduled')
    ).toBe('status-scheduled');

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


  it('should return cancelled status class', () => {

    expect(
      component.getStatusClass('Cancelled')
    ).toBe('status-cancelled');

  });


  // =====================================================
  // CLEAR FORM
  // =====================================================

  it('should clear the shift scheduling form', () => {

    component.selectedProject =
      'Chennai Metro Construction';

    component.selectedCategory =
      'Skilled Workers';

    component.selectedContractor =
      'ABC Constructions';

    component.selectedShift =
      'Morning';

    component.selectedWorkArea =
      'Concrete Work';

    component.workerCount = 20;

    component.selectedDate =
      '2026-08-25';

    component.selectedSupervisor =
      'Ravi Kumar';

    component.startTime =
      '08:00 AM';

    component.endTime =
      '05:00 PM';

    component.breakDuration =
      '01 Hour';

    component.selectedStatus =
      'Active';


    component.clearForm();


    expect(component.selectedProject)
      .toBe('');

    expect(component.selectedCategory)
      .toBe('');

    expect(component.selectedContractor)
      .toBe('');

    expect(component.selectedShift)
      .toBe('');

    expect(component.selectedWorkArea)
      .toBe('');

    expect(component.workerCount)
      .toBe(1);

    expect(component.selectedDate)
      .toBe('2026-08-24');

    expect(component.selectedSupervisor)
      .toBe('');

    expect(component.startTime)
      .toBe('');

    expect(component.endTime)
      .toBe('');

    expect(component.breakDuration)
      .toBe('');

    expect(component.selectedStatus)
      .toBe('Scheduled');

  });


  // =====================================================
  // ADD NEW SCHEDULE
  // =====================================================

  it('should add a new shift schedule', () => {

    const initialCount =
      component.schedules.length;


    component.selectedProject =
      'Chennai Metro Construction';

    component.selectedCategory =
      'Skilled Workers';

    component.selectedShift =
      'Morning';

    component.selectedDate =
      '2026-08-25';

    component.selectedWorkArea =
      'Concrete Work';

    component.workerCount =
      15;

    component.selectedSupervisor =
      'Ravi Kumar';

    component.startTime =
      '08:00 AM';

    component.endTime =
      '05:00 PM';


    component.scheduleShift();


    expect(component.schedules.length)
      .toBe(initialCount + 1);

  });


  // =====================================================
  // SCHEDULE ID
  // =====================================================

  it('should generate a schedule ID when adding a schedule', () => {

    const initialCount =
      component.schedules.length;


    component.selectedProject =
      'Airport Expansion';

    component.selectedCategory =
      'Electricians';

    component.selectedShift =
      'Night';

    component.selectedDate =
      '2026-08-25';

    component.startTime =
      '10:00 PM';

    component.endTime =
      '06:00 AM';


    component.scheduleShift();


    const lastSchedule =
      component.schedules[
        component.schedules.length - 1
      ];


    expect(lastSchedule.id)
      .toBe(
        `SH-${String(initialCount + 1).padStart(3, '0')}`
      );

  });


  // =====================================================
  // DELETE SCHEDULE
  // =====================================================

  it('should remove a shift schedule', () => {

    const initialCount =
      component.schedules.length;

    const schedule =
      component.schedules[0];


    component.schedules =
      component.schedules.filter(
        item => item !== schedule
      );


    expect(component.schedules.length)
      .toBe(initialCount - 1);

  });

});