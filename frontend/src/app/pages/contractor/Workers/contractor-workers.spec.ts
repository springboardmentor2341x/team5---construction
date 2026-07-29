import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorWorkers } from './contractor-workers';

describe('ContractorWorkers', () => {
  let component: ContractorWorkers;
  let fixture: ComponentFixture<ContractorWorkers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorWorkers],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorWorkers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
