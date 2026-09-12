import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsTopNavbar } from './notifications-top-navbar';

describe('NotificationsTopNavbar', () => {
  let component: NotificationsTopNavbar;
  let fixture: ComponentFixture<NotificationsTopNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsTopNavbar]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsTopNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});