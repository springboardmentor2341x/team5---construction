import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceManagementLayoutComponent } from './resource-management-layout';

describe('ResourceManagementLayoutComponent', () => {
  let component: ResourceManagementLayoutComponent;
  let fixture: ComponentFixture<ResourceManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceManagementLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ResourceManagementLayoutComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});