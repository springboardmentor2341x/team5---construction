import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmMaintenanceSchedulingComponent } from './rm-maintenance-scheduling';

describe('RmMaintenanceSchedulingComponent', () => {

  let component: RmMaintenanceSchedulingComponent;
  let fixture: ComponentFixture<RmMaintenanceSchedulingComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RmMaintenanceSchedulingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      RmMaintenanceSchedulingComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
