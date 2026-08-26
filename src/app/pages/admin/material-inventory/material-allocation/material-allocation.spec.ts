import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAllocation } from './material-allocation';

describe('MaterialAllocation', () => {
  let component: MaterialAllocation;
  let fixture: ComponentFixture<MaterialAllocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialAllocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialAllocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
