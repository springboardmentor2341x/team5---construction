import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceManagementTopNavbarComponent } from './resource-management-top-navbar';

describe('ResourceManagementTopNavbarComponent', () => {
  let component: ResourceManagementTopNavbarComponent;
  let fixture: ComponentFixture<ResourceManagementTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceManagementTopNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ResourceManagementTopNavbarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});