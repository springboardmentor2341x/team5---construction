import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusCard } from './focus-card';

describe('FocusCard', () => {
  let component: FocusCard;
  let fixture: ComponentFixture<FocusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FocusCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
