
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private userService:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  name: string;
  email: string;
  password: string;
  role: string;

  register() {
    let formData = {name: this.name, email: this.email, password: this.password, role: this.role };
    console.log(JSON.stringify(formData));
   this.userService.register(formData).subscribe(res => {
      console.log(res);
     this.toastr.success("Successfully Registered");
      this.router.navigate(['login']);
    },err=>{
      this.toastr.error("Failed To Register");
    });
  }
}