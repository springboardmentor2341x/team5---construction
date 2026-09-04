import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsManagement } from './notifications-management';

describe('NotificationsManagement', () => {
  let component: NotificationsManagement;
  let fixture: ComponentFixture<NotificationsManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsManagement]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have notification settings', () => {
    expect(component.notificationSettings.length).toBe(6);
  });

  it('should have all required notification types', () => {
    const types = component.notificationSettings.map(
      setting => setting.name
    );

    expect(types).toContain('Project Updates');
    expect(types).toContain('Task Assignments');
    expect(types).toContain('Procurement Alerts');
    expect(types).toContain('Attendance Alerts');
    expect(types).toContain('Deadline Notifications');
    expect(types).toContain('System Notifications');
  });

  it('should have notification activity records', () => {
    expect(component.notifications.length).toBeGreaterThan(0);
  });

  it('should enable all notification settings', () => {
    component.disableAll();

    component.enableAll();

    expect(
      component.notificationSettings.every(setting => setting.enabled)
    ).toBe(true);
  });

  it('should disable all notification settings', () => {
    component.enableAll();

    component.disableAll();

    expect(
      component.notificationSettings.every(setting => !setting.enabled)
    ).toBe(true);
  });

  it('should toggle notification setting', () => {
    const initialState = component.notificationSettings[0].enabled;

    component.toggleSetting(0);

    expect(
      component.notificationSettings[0].enabled
    ).toBe(!initialState);
  });

  it('should filter unread notifications', () => {
    component.selectFilter('Unread');

    expect(
      component.filteredNotifications.every(
        notification => notification.status === 'Unread'
      )
    ).toBe(true);
  });

  it('should filter read notifications', () => {
    component.selectFilter('Read');

    expect(
      component.filteredNotifications.every(
        notification => notification.status === 'Read'
      )
    ).toBe(true);
  });

  it('should return correct notification type classes', () => {
    expect(
      component.getTypeClass('Project Updates')
    ).toBe('project');

    expect(
      component.getTypeClass('Task Assignments')
    ).toBe('task');

    expect(
      component.getTypeClass('Procurement Alerts')
    ).toBe('procurement');

    expect(
      component.getTypeClass('Attendance Alerts')
    ).toBe('attendance');

    expect(
      component.getTypeClass('Deadline Notifications')
    ).toBe('deadline');

    expect(
      component.getTypeClass('System Notifications')
    ).toBe('system');
  });

  it('should return correct status classes', () => {
    expect(
      component.getStatusClass('Unread')
    ).toBe('unread');

    expect(
      component.getStatusClass('Read')
    ).toBe('read');
  });
});