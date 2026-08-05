import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorAssignedTasks } from './contractor-assigned-tasks';

describe('ContractorAssignedTasks', () => {
  let component: ContractorAssignedTasks;
  let fixture: ComponentFixture<ContractorAssignedTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorAssignedTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorAssignedTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
