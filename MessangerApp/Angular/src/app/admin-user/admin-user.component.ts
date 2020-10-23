import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/user_model';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users:User
  constructor(private usrSer:UserService, private router:Router) { }

  ngOnInit() {
  this.getUsers()
  }
getUsers(){
  this.usrSer.getUser().subscribe((res)=>{
    this.users = res;
    this.users.email
  })
}

deleteUser(id){
  this.usrSer.deleteUser(id).subscribe(()=>{
    this.getUsers();
  });
}

}
