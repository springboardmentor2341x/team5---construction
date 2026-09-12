import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurementManagementLayoutComponent } from './procurement-management-layout';

describe('ProcurementManagementLayoutComponent', () => {
  let component: ProcurementManagementLayoutComponent;
  let fixture: ComponentFixture<ProcurementManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurementManagementLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcurementManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the procurement sidebar', () => {
    const sidebar = fixture.nativeElement.querySelector(
      'app-procurement-management-sidebar'
    );

    expect(sidebar).toBeTruthy();
  });

  it('should contain the procurement top navbar', () => {
    const navbar = fixture.nativeElement.querySelector(
      'app-procurement-management-top-navbar'
    );

    expect(navbar).toBeTruthy();
  });

  it('should contain the router outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector(
      'router-outlet'
    );

    expect(routerOutlet).toBeTruthy();
  });
});