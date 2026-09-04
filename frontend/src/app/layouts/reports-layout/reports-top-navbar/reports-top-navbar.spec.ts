import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTopNavbarComponent } from './reports-top-navbar';

describe('ReportsTopNavbarComponent', () => {

  let component: ReportsTopNavbarComponent;
  let fixture: ComponentFixture<ReportsTopNavbarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ReportsTopNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTopNavbarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});