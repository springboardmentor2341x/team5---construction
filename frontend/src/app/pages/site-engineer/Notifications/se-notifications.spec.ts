import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeNotifications } from './se-notifications';

describe('SeNotifications', () => {
  let component: SeNotifications;
  let fixture: ComponentFixture<SeNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeNotifications],
    }).compileComponents();

    fixture = TestBed.createComponent(SeNotifications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
