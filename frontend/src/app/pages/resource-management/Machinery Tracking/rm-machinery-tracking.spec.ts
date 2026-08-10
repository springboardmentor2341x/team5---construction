import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmMachineryTrackingComponent } from './rm-machinery-tracking';

describe('RmMachineryTrackingComponent', () => {
  let component: RmMachineryTrackingComponent;
  let fixture: ComponentFixture<RmMachineryTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmMachineryTrackingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      RmMachineryTrackingComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
