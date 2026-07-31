import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDocuments } from './client-documents';

describe('ClientDocuments', () => {
  let component: ClientDocuments;
  let fixture: ComponentFixture<ClientDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDocuments],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDocuments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
