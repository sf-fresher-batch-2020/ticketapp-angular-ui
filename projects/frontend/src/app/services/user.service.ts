import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;

  constructor(private http: HttpClient,private authService :AuthService) {
    this.apiUrl = environment.API_URL;
  }

  getUsers() {
    let url = this.apiUrl + "/users";
    return this.http.get(url);
  }
  
  sendMail(user): Observable<any> {
    const url = this.apiUrl + '/users/mail';
    return this.http.post(url, user);
  }

  login(user) {
    let url = this.apiUrl + "/users/login";
    return this.http.post(url, user);
  }

  getUser(id) {
    let url = this.apiUrl + "/users/" + id;
    return this.http.get(url);
  }

  deleteUser(id) {
    let url = this.apiUrl + "/users/" + id;
    return this.http.delete(url);
  }
  register(user) {
    let url = this.apiUrl + "/users";
    return this.http.post(url, user);
  }
}
