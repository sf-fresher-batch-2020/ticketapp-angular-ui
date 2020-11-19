import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-techdashboard',
  templateUrl: './techdashboard.component.html',
  styleUrls: ['./techdashboard.component.css']
})
export class TechdashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,
    private ticketService: TicketService, private UserService: UserService) { }

  ticketList: any;
  ngOnInit(): void {
    this.loadMyTickets();
    this.filterByPriority('ALL');
    this.filterByStatus('ALL');
    this.filterByAssigned('ALL');
    this.filterByUnassigned('ALL');
  }
  loadMyTickets() {
    this.ticketService.getMyTickets().subscribe(res => {
      let tickets: any = res;
      this.ticketList = tickets;
    });

  }

  filterByPriority(priority) {
    this.ticketService.getMyTickets().subscribe(res => {
      let tickets: any = res;
      
      let filteredData = null;
      if (priority == 'ALL') {
        filteredData = tickets;
      }
      else {
        filteredData = tickets.filter(obj => obj.priority == priority);
      }
      console.log(filteredData);
      this.ticketList = filteredData;
    });
  }

filterByStatus(ticketstatus){
  this.ticketService.getMyTickets().subscribe(res => {
    let tickets: any = res;
    
    let filteredData = null;
    if (ticketstatus == 'ALL') {
      filteredData = tickets;
    }
    else {
      filteredData = tickets.filter(obj => obj.ticketstatus == ticketstatus);
    }
    console.log(filteredData);
    this.ticketList = filteredData;
  });
}

filterByAssigned(team){
  this.ticketService.getMyTickets().subscribe(res => {
    let tickets: any = res;
    
    let filteredData = null;
    if (team == 'ALL') {
      filteredData = tickets;
    }
    else {
      filteredData = tickets.filter(obj => obj.team == team);
    }
    console.log(filteredData);
    this.ticketList = filteredData;
  });
}

filterByUnassigned(team){
  this.ticketService.getMyTickets().subscribe(res => {
    let tickets: any = res;
    
    let filteredData = null;
    if (team == 'ALL') {
      filteredData = tickets;
    }
    else {
      filteredData = tickets.filter(obj => obj.team == "");
    }
    console.log(filteredData);
    this.ticketList = filteredData;
  });
}
}
