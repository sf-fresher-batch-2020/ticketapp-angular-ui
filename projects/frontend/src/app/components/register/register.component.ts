
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';


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

  register(form:NgForm) {
    let formData = {name: this.name, email: this.email, password: this.password, role: this.role };
    console.log(JSON.stringify(formData));
   this.userService.register(formData).subscribe(res => {
      console.log(res);
     this.toastr.success("Successfully Registered");
      form.reset();
      this.router.navigate(['login']);
    },err=>{
      console.error(err);
      this.toastr.error("Failed To Register");
    });
  }
}