import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSidebar } from './notifications-sidebar';

describe('NotificationsSidebar', () => {
  let component: NotificationsSidebar;
  let fixture: ComponentFixture<NotificationsSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsSidebar]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});