import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUtilization } from './resource-utilization';

describe('ResourceUtilization', () => {
  let component: ResourceUtilization;
  let fixture: ComponentFixture<ResourceUtilization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceUtilization],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceUtilization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
