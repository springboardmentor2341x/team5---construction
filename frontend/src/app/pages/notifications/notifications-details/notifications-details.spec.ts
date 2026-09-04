import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { NotificationsDetails } from './notifications-details';

describe('NotificationsDetails', () => {
  let component: NotificationsDetails;
  let fixture: ComponentFixture<NotificationsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have notification details', () => {
    expect(component.notification).toBeTruthy();
    expect(component.notification.title).toBe('Project Status Updated');
  });

  it('should have notification type', () => {
    expect(component.notification.type).toBe('Project Updates');
  });

  it('should have notification priority', () => {
    expect(component.notification.priority).toBe('Medium');
  });

  it('should mark notification as read', () => {
    component.notification.read = false;

    component.markAsRead();

    expect(component.notification.read).toBe(true);
  });

  it('should return correct priority class', () => {
    expect(component.getPriorityClass('High')).toBe('high');
    expect(component.getPriorityClass('Medium')).toBe('medium');
    expect(component.getPriorityClass('Low')).toBe('low');
  });

  it('should return correct notification type class', () => {
    expect(component.getTypeClass('Project Updates')).toBe('project');
    expect(component.getTypeClass('Task Assignments')).toBe('task');
    expect(component.getTypeClass('Procurement Alerts')).toBe('procurement');
    expect(component.getTypeClass('Attendance Alerts')).toBe('attendance');
    expect(component.getTypeClass('Deadline Notifications')).toBe('deadline');
    expect(component.getTypeClass('System Notifications')).toBe('system');
  });
});