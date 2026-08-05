import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmMyProjects } from './pm-my-projects';

describe('PmMyProjects', () => {
  let component: PmMyProjects;
  let fixture: ComponentFixture<PmMyProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmMyProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(PmMyProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
