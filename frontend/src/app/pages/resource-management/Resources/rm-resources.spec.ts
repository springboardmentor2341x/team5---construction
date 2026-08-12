import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmResourcesComponent } from './rm-resources';

describe('RmResourcesComponent', () => {
  let component: RmResourcesComponent;
  let fixture: ComponentFixture<RmResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmResourcesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RmResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 20 resources', () => {
    expect(component.resources.length).toBe(20);
  });

  it('should calculate total resources correctly', () => {
    expect(component.totalResources).toBe(20);
  });

  it('should calculate available resources correctly', () => {
    expect(component.availableResources).toBe(7);
  });

  it('should calculate allocated resources correctly', () => {
    expect(component.allocatedResources).toBe(8);
  });

  it('should calculate maintenance resources correctly', () => {
    expect(component.maintenanceResources).toBe(5);
  });

  it('should filter resources by category', () => {
    component.selectedCategory = 'Excavator';

    expect(component.filteredResources.length).toBe(3);

    expect(
      component.filteredResources.every(
        resource => resource.category === 'Excavator'
      )
    ).toBe(true);
  });

  it('should filter resources by status', () => {
    component.selectedStatus = 'Available';

    expect(
      component.filteredResources.every(
        resource => resource.status === 'Available'
      )
    ).toBe(true);
  });

  it('should search resources', () => {
    component.searchText = 'EXC-001';

    expect(component.filteredResources.length).toBe(1);
    expect(component.filteredResources[0].id).toBe('EXC-001');
  });

  it('should search by project', () => {
    component.searchText = 'Chennai Metro Project';

    expect(component.filteredResources.length).toBeGreaterThan(0);

    expect(
      component.filteredResources.every(
        resource => resource.project === 'Chennai Metro Project'
      )
    ).toBe(true);
  });

  it('should return correct status class for Available', () => {
    expect(
      component.getStatusClass('Available')
    ).toBe('status-available');
  });

  it('should return correct status class for Allocated', () => {
    expect(
      component.getStatusClass('Allocated')
    ).toBe('status-allocated');
  });

  it('should return correct status class for Maintenance', () => {
    expect(
      component.getStatusClass('Maintenance')
    ).toBe('status-maintenance');
  });

  it('should return empty class for unknown status', () => {
    expect(
      component.getStatusClass('Unknown')
    ).toBe('');
  });

  it('should clear all filters', () => {
    component.searchText = 'Excavator';
    component.selectedCategory = 'Excavator';
    component.selectedStatus = 'Available';

    component.clearFilters();

    expect(component.searchText).toBe('');
    expect(component.selectedCategory).toBe('All');
    expect(component.selectedStatus).toBe('All');
    expect(component.filteredResources.length).toBe(20);
  });

  it('should return all required categories', () => {
    expect(component.categories).toContain('All');
    expect(component.categories).toContain('Excavator');
    expect(component.categories).toContain('Concrete Mixer');
    expect(component.categories).toContain('Crane');
    expect(component.categories).toContain('Dump Truck');
    expect(component.categories).toContain('Generator');
    expect(component.categories).toContain('Safety Equipment');
    expect(component.categories).toContain('Water Pump');
    expect(component.categories).toContain('Air Compressor');
    expect(component.categories).toContain('Road Roller');
    expect(component.categories).toContain('Material Lift');
  });

  it('should return all required statuses', () => {
    expect(component.statuses).toEqual([
      'All',
      'Available',
      'Allocated',
      'Maintenance'
    ]);
  });

  it('should view a resource', () => {
    const resource = component.resources[0];

    expect(() => {
      component.viewResource(resource);
    }).not.toThrow();
  });
});