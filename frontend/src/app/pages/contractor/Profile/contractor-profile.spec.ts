import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorProfile } from './contractor-profile';

describe('ContractorProfile', () => {
  let component: ContractorProfile;
  let fixture: ComponentFixture<ContractorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractorProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
