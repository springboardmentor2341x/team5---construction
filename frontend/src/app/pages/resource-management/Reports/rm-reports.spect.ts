import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmReportsComponent } from './rm-reports';

export async function testRmReportsComponent(): Promise<void> {

  let fixture: ComponentFixture<RmReportsComponent>;

  await TestBed.configureTestingModule({
    imports: [RmReportsComponent]
  }).compileComponents();

  fixture = TestBed.createComponent(RmReportsComponent);
  fixture.detectChanges();

  if (!fixture.componentInstance) {
    throw new Error('RmReportsComponent was not created');
  }
}