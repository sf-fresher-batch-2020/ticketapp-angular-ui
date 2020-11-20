
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.css']
})
export class MyticketComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService,
    private ticketService: TicketService) { }

    loggedInUser;
  ticketList: any;
  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.loadMyTickets();
  }
  loadMyTickets() {
    
    let loggedInUserId = this.authService.getLoggedInUserId();
     this.ticketService.getMyTickets().subscribe(res => {
      let tickets: any = res;
      this.ticketList = tickets.filter(obj => obj.createdBy == loggedInUserId);
    });

  }
}
