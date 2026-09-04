import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsPage } from './notifications-page';

describe('NotificationsPage', () => {
  let component: NotificationsPage;
  let fixture: ComponentFixture<NotificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have notification data', () => {
    expect(component.notifications.length).toBeGreaterThan(0);
  });

  it('should have all required notification types', () => {
    const types = component.notifications.map(
      notification => notification.type
    );

    expect(types).toContain('Project Updates');
    expect(types).toContain('Task Assignments');
    expect(types).toContain('Procurement Alerts');
    expect(types).toContain('Attendance Alerts');
    expect(types).toContain('Deadline Notifications');
    expect(types).toContain('System Notifications');
  });

  it('should mark all notifications as read', () => {
    component.markAllAsRead();

    expect(component.unreadNotifications).toBe(0);
    expect(component.notifications.every(item => item.read)).toBe(true);
  });
});