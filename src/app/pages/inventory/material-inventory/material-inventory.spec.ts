import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInventory } from './material-inventory';

describe('MaterialInventory', () => {
  let component: MaterialInventory;
  let fixture: ComponentFixture<MaterialInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialInventory],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
