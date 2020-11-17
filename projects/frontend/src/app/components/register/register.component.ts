import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  
  name: string;
  email: string;
  password: string;
  role: string;

  register() {
    let generateUserId =  Math.floor(100 + Math.random() * 900);
    let formData = { registerid: generateUserId, name: this.name, email: this.email, password: this.password, role: this.role };
    console.log(JSON.stringify(formData));
    let url = "http://ticketapp-angular.herokuapp.com/api/users";
    this.http.post(url, formData).subscribe(res => {
      console.log(res);
      alert("Successfully Registered");
      this.router.navigate(['login']);
    },err=>{
      alert("Successfully Failed");
    });
  }
}