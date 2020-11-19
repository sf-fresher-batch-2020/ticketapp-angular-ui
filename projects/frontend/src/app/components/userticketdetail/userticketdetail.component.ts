import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-userticketdetail',
  templateUrl: './userticketdetail.component.html',
  styleUrls: ['./userticketdetail.component.css']
})
export class UserticketdetailComponent implements OnInit {

  id: number;
  ticket: any;
  constructor(private route: ActivatedRoute, private ticketService: TicketService, private authService: AuthService) {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    })
  }

  ngOnInit(): void {
    this.loadTicket();
  }


  loadTicket() {
    this.ticketService.getTicket(this.id).subscribe(res => {
      this.ticket = res;
    })
  }
}
