import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-viewticketdetail',
  templateUrl: './viewticketdetail.component.html',
  styleUrls: ['./viewticketdetail.component.css']
})
export class ViewticketdetailComponent implements OnInit {

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
