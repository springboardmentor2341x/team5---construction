import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceManagementLayoutComponent }
  from './workforce-management-layout';

describe('WorkforceManagementLayoutComponent', () => {

  let component: WorkforceManagementLayoutComponent;
  let fixture: ComponentFixture<WorkforceManagementLayoutComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WorkforceManagementLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkforceManagementLayoutComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the workforce sidebar', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector(
        'app-workforce-management-sidebar'
      )
    ).toBeTruthy();

  });

  it('should contain the workforce top navbar', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector(
        'app-workforce-management-top-navbar'
      )
    ).toBeTruthy();

  });

  it('should contain router outlet', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('router-outlet')
    ).toBeTruthy();

  });

});

