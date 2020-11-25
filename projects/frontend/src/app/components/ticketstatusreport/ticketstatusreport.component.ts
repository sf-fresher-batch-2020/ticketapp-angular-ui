import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticketstatusreport',
  templateUrl: './ticketstatusreport.component.html',
  styleUrls: ['./ticketstatusreport.component.css']
})
export class TicketstatusreportComponent implements OnInit {

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
   this.ticketReportstatus();
   this.ticketReportTeamStatus();
  }

  tickets;
  teamtickets;
  ticketReportstatus(){
    this.ticketService.getTicketStatus().subscribe(res => {
      this.tickets = res;
    });
  }
  ticketReportTeamStatus(){
    this.ticketService.getTicketTeamStatus().subscribe(res => {
      this.teamtickets = res;
    });
  }
}
