import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeProjectDetails } from './se-project-details';

describe('SeProjectDetails', () => {
  let component: SeProjectDetails;
  let fixture: ComponentFixture<SeProjectDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeProjectDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SeProjectDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
