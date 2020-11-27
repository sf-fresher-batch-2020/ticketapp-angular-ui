import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: any;
  selectedUser;

  ngOnInit(): void {
    this.listUsers();
  }
  listUsers() {
    this.userService.getUsers().subscribe(res => {
      let users:any = res;
      this.user = users.filter(obj => obj.role == "USER");
    });
  }
 /* view(id) {
    this.selectedUser = null; //reset
    console.log("Fetch  users from mock backend api for the given userId ", id);
    this.userService.getUser(id).subscribe(res => {
      this.selectedUser = res;
    });
  }
  deleteUser(id) {
    console.log("Deleting user :" + id);
    this.userService.deleteUser(id).subscribe(res => {
      this.selectedUser = null; // reset the data;
      this.listUsers(); // refresh the data
    });
  }*/
}