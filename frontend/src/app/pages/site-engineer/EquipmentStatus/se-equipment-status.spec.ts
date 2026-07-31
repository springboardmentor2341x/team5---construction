import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeEquipmentStatus } from './se-equipment-status';

describe('SeEquipmentStatus', () => {
  let component: SeEquipmentStatus;
  let fixture: ComponentFixture<SeEquipmentStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeEquipmentStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(SeEquipmentStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
