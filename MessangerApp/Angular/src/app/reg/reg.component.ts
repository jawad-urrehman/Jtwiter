import { UserService } from './../services/user-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user_model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})


export class RegComponent implements OnInit {
  
  constructor(private userService:UserService,public route:ActivatedRoute,
    public router:Router ) { }
    myFrom:FormGroup;
    check:boolean
  ngOnInit() {
    this.check=false
    this.myFrom = new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
    })
  }
  user = new User();
  regUser(){
    this.user.UserName = this.myFrom.value.name;
    this.user.email = this.myFrom.value.email;
    this.user.password = this.myFrom.value.password
    this.user.role = 'user';
    this.userService.addUser(this.user).subscribe((res)=>{
      console.log
       this.gotoLogin();
    },
    (err)=>{
      console.error('error caught in component')
      this.check=true;
    }
    )
    
    
  }

  gotoLogin(){
    this.router.navigate(['/log']);
  }
}
