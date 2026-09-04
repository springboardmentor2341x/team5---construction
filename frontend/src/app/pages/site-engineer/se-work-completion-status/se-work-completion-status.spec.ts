import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeWorkCompletionStatus } from './se-work-completion-status';

describe('SeWorkCompletionStatus', () => {
  let component: SeWorkCompletionStatus;
  let fixture: ComponentFixture<SeWorkCompletionStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeWorkCompletionStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(SeWorkCompletionStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
