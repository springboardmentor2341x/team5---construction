import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaterialInventory } from './admin-material-inventory';

describe('AdminMaterialInventory', () => {
  let component: AdminMaterialInventory;
  let fixture: ComponentFixture<AdminMaterialInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMaterialInventory],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMaterialInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
