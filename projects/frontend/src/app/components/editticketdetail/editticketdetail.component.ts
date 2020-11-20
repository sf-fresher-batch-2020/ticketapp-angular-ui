import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-editticketdetail',
  templateUrl: './editticketdetail.component.html',
  styleUrls: ['./editticketdetail.component.css']
})
export class EditticketdetailComponent implements OnInit {

  id: number;
  ticket: any;
  constructor(private route: ActivatedRoute, private ticketService: TicketService, private authService: AuthService) {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    })
  }
  selectedTicket;
  ngOnInit(): void {
    this.loadTicket();
  }


  loadTicket() {
    this.ticketService.getTicket(this.id).subscribe(res => {
      this.ticket = res;
    })
  }

  
  updateTicket(ticket){
    this.ticketService.update(ticket).subscribe(res => {
       this.loadTicket();
       window.location.href="myticket";
    })
  }

  deleteTicket(id) {
    console.log("Deleting user :" + id);
    this.ticketService.deleteTicket(id).subscribe(res => {
      this.selectedTicket= null; // reset the data;
      window.location.href="myticket";
    // refresh the data
    });
  }
  
 /* closeticket(ticket){
    ticket["ticketstatus"] = "Close";
    this.ticketService.updateStatus(ticket).subscribe(res => {
       this.loadTicket();
    })
  }*/

}
