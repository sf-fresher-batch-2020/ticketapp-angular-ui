import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketstatusreportComponent } from './ticketstatusreport.component';

describe('TicketstatusreportComponent', () => {
  let component: TicketstatusreportComponent;
  let fixture: ComponentFixture<TicketstatusreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketstatusreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketstatusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
