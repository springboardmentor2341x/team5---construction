import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceManagementTopNavbarComponent } 
  from './workforce-management-top-navbar';

describe('WorkforceManagementTopNavbarComponent', () => {

  let component: WorkforceManagementTopNavbarComponent;
  let fixture: ComponentFixture<WorkforceManagementTopNavbarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WorkforceManagementTopNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkforceManagementTopNavbarComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display workforce management title', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('h1')?.textContent
    ).toContain('Workforce Management');

  });

  it('should have notification count', () => {

    expect(component.notifications).toBe(3);

  });

});