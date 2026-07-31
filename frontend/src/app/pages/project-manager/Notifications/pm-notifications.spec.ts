import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmNotifications } from './pm-notifications';

describe('PmNotifications', () => {
  let component: PmNotifications;
  let fixture: ComponentFixture<PmNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmNotifications],
    }).compileComponents();

    fixture = TestBed.createComponent(PmNotifications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
