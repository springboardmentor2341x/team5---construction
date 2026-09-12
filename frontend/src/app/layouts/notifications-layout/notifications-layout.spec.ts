import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsLayout } from './notifications-layout';

describe('NotificationsLayout', () => {
  let component: NotificationsLayout;
  let fixture: ComponentFixture<NotificationsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsLayout]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});