import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmProjectDetails } from './pm-project-details';

describe('PmProjectDetails', () => {
  let component: PmProjectDetails;
  let fixture: ComponentFixture<PmProjectDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmProjectDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PmProjectDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
