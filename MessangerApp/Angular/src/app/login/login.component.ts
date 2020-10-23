import { UserService } from './../services/user-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user_model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,public route:ActivatedRoute,
    public router:Router ) { }
  user = new User()
  password:string;
  email:string;
  check:boolean;
 
  ngOnInit() {
    this.check = false;
  }

 

  login(){
    this.user.email = this.email;
    this.user.password = this.password;
      this.userService.loginUser(this.user).subscribe((res)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('userName',res.UsrName)
        localStorage.setItem('UserId',res.userId);
        localStorage.setItem('role',res.role)
        this.router.navigate(['/tweet']) 
      },
      (err)=>{
        this.check = true;
      })
  }

 
  gotoSignUp(){
    this.router.navigate(['/reg']);
  }

  
  
}
