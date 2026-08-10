import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceManagementSidebarComponent } from './resource-management-sidebar';

describe('ResourceManagementSidebarComponent', () => {
  let component: ResourceManagementSidebarComponent;
  let fixture: ComponentFixture<ResourceManagementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceManagementSidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      ResourceManagementSidebarComponent
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});