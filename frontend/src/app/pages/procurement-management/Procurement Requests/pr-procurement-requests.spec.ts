import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrProcurementRequestsComponent } from './pr-procurement-requests';

describe('PrProcurementRequestsComponent', () => {

  let component: PrProcurementRequestsComponent;
  let fixture: ComponentFixture<PrProcurementRequestsComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PrProcurementRequestsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      PrProcurementRequestsComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load procurement requests', () => {
    expect(component.requests.length).toBeGreaterThan(0);
    expect(component.filteredRequests.length).toBeGreaterThan(0);
  });

  it('should have required procurement categories', () => {

    const categories = component.requests.map(
      request => request.category
    );

    expect(
      categories.every(category =>
        [
          'Raw Materials',
          'Equipment',
          'Machinery',
          'Safety Equipment',
          'Office Supplies'
        ].includes(category)
      )
    ).toBe(true);

  });

  it('should filter requests by status', () => {

    component.selectedStatus = 'Pending';

    component.filterRequests();

    expect(
      component.filteredRequests.every(
        request => request.status === 'Pending'
      )
    ).toBe(true);

  });

  it('should filter requests by category', () => {

    component.selectedCategory = 'Raw Materials';

    component.filterRequests();

    expect(
      component.filteredRequests.every(
        request => request.category === 'Raw Materials'
      )
    ).toBe(true);

  });

  it('should filter requests by priority', () => {

    component.selectedPriority = 'High';

    component.filterRequests();

    expect(
      component.filteredRequests.every(
        request => request.priority === 'High'
      )
    ).toBe(true);

  });

  it('should search procurement requests', () => {

    component.searchText = 'Cement';

    component.filterRequests();

    expect(component.filteredRequests.length).toBe(1);
    expect(component.filteredRequests[0].item).toBe('Cement');

  });

  it('should open add request form', () => {

    component.openAddRequest();

    expect(component.showAddRequest).toBe(true);
    expect(component.editingRequest).toBeNull();
    expect(component.requestForm.id).toMatch(/^PR-\d{3}$/);

  });

  it('should open request details', () => {

    const request = component.requests[0];

    component.viewRequest(request);

    expect(component.showViewRequest).toBe(true);
    expect(component.selectedRequest).toEqual(request);

  });

  it('should close request details', () => {

    component.viewRequest(component.requests[0]);

    component.closeViewRequest();

    expect(component.showViewRequest).toBe(false);
    expect(component.selectedRequest).toBeNull();

  });

  it('should open edit request form', () => {

    const request = component.requests[0];

    component.editRequest(request);

    expect(component.showAddRequest).toBe(true);
    expect(component.editingRequest).toEqual(request);
    expect(component.requestForm.id).toBe(request.id);

  });

  it('should return correct status classes', () => {

    expect(component.getStatusClass('Pending'))
      .toBe('status-pending');

    expect(component.getStatusClass('Approved'))
      .toBe('status-approved');

    expect(component.getStatusClass('Rejected'))
      .toBe('status-rejected');

    expect(component.getStatusClass('Processing'))
      .toBe('status-processing');

    expect(component.getStatusClass('Completed'))
      .toBe('status-completed');

  });

  it('should return correct priority classes', () => {

    expect(component.getPriorityClass('High'))
      .toBe('priority-high');

    expect(component.getPriorityClass('Medium'))
      .toBe('priority-medium');

    expect(component.getPriorityClass('Low'))
      .toBe('priority-low');

  });

  it('should generate a new procurement request ID', () => {

    component.openAddRequest();

    expect(component.requestForm.id)
      .toBe('PR-009');

  });

});