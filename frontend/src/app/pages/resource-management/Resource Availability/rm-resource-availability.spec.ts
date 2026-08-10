import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmResourceAvailabilityComponent } from './rm-resource-availability';

describe('RmResourceAvailabilityComponent', () => {

  let component: RmResourceAvailabilityComponent;
  let fixture: ComponentFixture<RmResourceAvailabilityComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RmResourceAvailabilityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      RmResourceAvailabilityComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});