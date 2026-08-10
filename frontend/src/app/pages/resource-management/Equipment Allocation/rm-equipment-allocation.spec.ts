import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmEquipmentAllocationComponent } from './rm-equipment-allocation';

describe('RmEquipmentAllocationComponent', () => {
  let component: RmEquipmentAllocationComponent;
  let fixture: ComponentFixture<RmEquipmentAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmEquipmentAllocationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      RmEquipmentAllocationComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
