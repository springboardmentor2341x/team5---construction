import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceManagement } from './workforce-management';

describe('WorkforceManagement', () => {
  let component: WorkforceManagement;
  let fixture: ComponentFixture<WorkforceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkforceManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkforceManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
