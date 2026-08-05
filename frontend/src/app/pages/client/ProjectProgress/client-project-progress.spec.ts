import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectProgress } from './client-project-progress';

describe('ClientProjectProgress', () => {
  let component: ClientProjectProgress;
  let fixture: ComponentFixture<ClientProjectProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProjectProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientProjectProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
