import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  getUsers() {
    let url = this.apiUrl + "/users";
    return this.http.get(url);
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
