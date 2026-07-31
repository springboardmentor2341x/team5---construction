import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmWorkforce } from './pm-workforce';

describe('PmWorkforce', () => {
  let component: PmWorkforce;
  let fixture: ComponentFixture<PmWorkforce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmWorkforce],
    }).compileComponents();

    fixture = TestBed.createComponent(PmWorkforce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
