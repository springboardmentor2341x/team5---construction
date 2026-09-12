import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmAttendanceTrackingComponent } from './wm-attendance-tracking';

describe('WmAttendanceTrackingComponent', () => {

  let component: WmAttendanceTrackingComponent;
  let fixture: ComponentFixture<WmAttendanceTrackingComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        WmAttendanceTrackingComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmAttendanceTrackingComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('should have selected date', () => {

    expect(component.selectedDate).toBe('2026-08-24');

  });


  it('should have attendance records', () => {

    expect(
      component.attendanceRecords.length
    ).toBe(8);

  });


  it('should calculate total workers', () => {

    expect(
      component.totalWorkers
    ).toBe(8);

  });


  it('should calculate present count', () => {

    expect(
      component.presentCount
    ).toBe(5);

  });


  it('should calculate absent count', () => {

    expect(
      component.absentCount
    ).toBe(1);

  });


  it('should calculate late count', () => {

    expect(
      component.lateCount
    ).toBe(2);

  });


  it('should return present status class', () => {

    expect(
      component.getStatusClass('Present')
    ).toBe('status-present');

  });


  it('should return absent status class', () => {

    expect(
      component.getStatusClass('Absent')
    ).toBe('status-absent');

  });


  it('should return late status class', () => {

    expect(
      component.getStatusClass('Late')
    ).toBe('status-late');

  });


  it('should return leave status class', () => {

    expect(
      component.getStatusClass('Leave')
    ).toBe('status-leave');

  });


  it('should return empty class for unknown status', () => {

    expect(
      component.getStatusClass('Unknown')
    ).toBe('');

  });


  it('should have worker Rajesh Kumar', () => {

    expect(
      component.attendanceRecords.some(
        record => record.worker === 'Rajesh Kumar'
      )
    ).toBeTruthy();

  });


  it('should have worker Arun Prakash', () => {

    expect(
      component.attendanceRecords.some(
        record => record.worker === 'Arun Prakash'
      )
    ).toBeTruthy();

  });


  it('should have present attendance records', () => {

    expect(
      component.attendanceRecords.some(
        record => record.status === 'Present'
      )
    ).toBeTruthy();

  });


  it('should have absent attendance records', () => {

    expect(
      component.attendanceRecords.some(
        record => record.status === 'Absent'
      )
    ).toBeTruthy();

  });


  it('should have late attendance records', () => {

    expect(
      component.attendanceRecords.some(
        record => record.status === 'Late'
      )
    ).toBeTruthy();

  });


  it('should update selected date', () => {

    component.selectedDate = '2026-08-25';

    expect(
      component.selectedDate
    ).toBe('2026-08-25');

  });


  it('should have mark attendance method', () => {

    expect(
      component.markAttendance
    ).toBeTruthy();

  });


  it('should have filter attendance method', () => {

    expect(
      component.filterAttendance
    ).toBeTruthy();

  });


  it('should have view attendance method', () => {

    expect(
      component.viewAttendance
    ).toBeTruthy();

  });


  it('should have edit attendance method', () => {

    expect(
      component.editAttendance
    ).toBeTruthy();

  });

});