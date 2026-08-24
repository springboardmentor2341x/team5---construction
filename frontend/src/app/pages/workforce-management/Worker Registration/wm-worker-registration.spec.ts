import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmWorkerRegistrationComponent } from './wm-worker-registration';

describe('WmWorkerRegistrationComponent', () => {

  let component: WmWorkerRegistrationComponent;
  let fixture: ComponentFixture<WmWorkerRegistrationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WmWorkerRegistrationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmWorkerRegistrationComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain workforce categories', () => {
    expect(component.categories.length).toBe(6);
  });


  it('should contain contractors', () => {
    expect(component.contractors.length).toBeGreaterThan(0);
  });


  it('should contain projects', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });


  it('should contain registered workers', () => {
    expect(component.workers.length).toBeGreaterThan(0);
  });


  it('should open worker registration form', () => {

    component.openRegistration();

    expect(component.showForm).toBe(true);
    expect(component.showBulkForm).toBe(false);

  });


  it('should open bulk registration form', () => {

    component.openBulkRegistration();

    expect(component.showBulkForm).toBe(true);
    expect(component.showForm).toBe(false);

  });


  it('should close registration forms', () => {

    component.openRegistration();

    component.closeForms();

    expect(component.showForm).toBe(false);
    expect(component.showBulkForm).toBe(false);

  });


  it('should calculate active workers', () => {

    expect(component.activeWorkers).toBeGreaterThan(0);

  });


  it('should calculate workers on leave', () => {

    expect(component.leaveWorkers).toBeGreaterThan(0);

  });

});