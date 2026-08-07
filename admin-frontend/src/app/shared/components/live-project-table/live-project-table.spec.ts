import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectTable } from './live-project-table';

describe('LiveProjectTable', () => {
  let component: LiveProjectTable;
  let fixture: ComponentFixture<LiveProjectTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveProjectTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveProjectTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
