import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeResources } from './se-resources';

describe('SeResources', () => {
  let component: SeResources;
  let fixture: ComponentFixture<SeResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeResources],
    }).compileComponents();

    fixture = TestBed.createComponent(SeResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
