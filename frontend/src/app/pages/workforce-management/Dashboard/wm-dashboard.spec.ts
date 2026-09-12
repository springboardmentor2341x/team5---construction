import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmDashboardComponent } from './wm-dashboard';

describe('WmDashboardComponent', () => {

  let component: WmDashboardComponent;
  let fixture: ComponentFixture<WmDashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WmDashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WmDashboardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have total workers', () => {
    expect(component.totalWorkers).toBe(1250);
  });

  it('should have present workers', () => {
    expect(component.presentWorkers).toBe(1085);
  });

  it('should have absent workers', () => {
    expect(component.absentWorkers).toBe(95);
  });

  it('should have leave workers', () => {
    expect(component.leaveWorkers).toBe(70);
  });

  it('should have six workforce categories', () => {
    expect(component.workforceCategories.length).toBe(6);
  });

  it('should have project workforce data', () => {
    expect(component.projectWorkforce.length).toBe(4);
  });

});