import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTracking } from './equipment-tracking';

describe('EquipmentTracking', () => {
  let component: EquipmentTracking;
  let fixture: ComponentFixture<EquipmentTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
