import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorWorkProgress } from './contractor-work-progress';

describe('ContractorWorkProgress', () => {
  let component: ContractorWorkProgress;
  let fixture: ComponentFixture<ContractorWorkProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorWorkProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorWorkProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
