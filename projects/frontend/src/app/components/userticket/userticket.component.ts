
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userticket',
  templateUrl: './userticket.component.html',
  styleUrls: ['./userticket.component.css']
})
export class UserticketComponent implements OnInit {

  constructor(private ticketService: TicketService, private router: Router,
    private authService: AuthService, private userService: UserService, private toastr: ToastrService) { }

  loggedInUser;

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  title: string;
  mobile: string;
  department: string;
  priority: string;
  description: string;
  ticketstatus: string;
  teamAssign: string;

  ticket() {
    let ticketData = {
      title: this.title, mobileNumber: this.mobile,
      department: this.department, priority: this.priority, description: this.description,
      ticketstatus: 'Open', teamAssign: '', createdBy: this.loggedInUser.id, createdDate : new Date().toJSON()
    };
   
    this.ticketService.ticket(ticketData).subscribe(res => {
      console.log(res);
      this.toastr.success("Successfully Generated Ticket");
      this.router.navigate(['myticket']);
    }, err => {
      console.error(err);
      this.toastr.error("Failed To Generate Ticket");
    });
  }
}
