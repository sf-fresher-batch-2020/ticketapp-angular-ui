import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl:string;
  constructor(private authService: AuthService, private http: HttpClient,private userService:UserService) { 
    this.apiUrl = environment.API_URL;
  }
  tickets: any;

  getMyTickets() {
    let url = this.apiUrl + "/tickets";
    return this.http.get(url);
  }


  getTicket(id:number) {
    let url = this.apiUrl + "/tickets/"+id;
    return this.http.get(url);
  }
  
  ticket(ticket)
  {
    let url = this.apiUrl + "/tickets";
    return this.http.post(url,ticket);
  }


  updateStatus(ticket)
  {
    let url = this.apiUrl + "/tickets/"+ ticket.id;
    return this.http.patch(url,ticket);
  }

  deleteTicket(id) {
    let url = this.apiUrl + "/tickets/" + id;
    return this.http.delete(url);
  }
  update(ticket)
  {
    let url = this.apiUrl + "/tickets/"+ ticket.id;
    return this.http.put(url,ticket);
  }

}
