import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../services/user-service';
import { Mesg } from '../models/msg';
import { MsgService } from './../services/message-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user_model'; 


@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  constructor(private messageService:MsgService,public route:ActivatedRoute,
    public router:Router,public userService : UserService) { }
    myFrom:FormGroup
  ngOnInit() {
    this.myFrom = new FormGroup({
      content:new FormControl(null,Validators.required)
    })
  }
  msg = new Mesg();
  content:string;
  user:User;
  usrId:string;


  findUser(){
    this.usrId = localStorage.getItem('UserId');
    this.userService.getoneUser(this.usrId).subscribe((res)=>{
      this.user = res;
      this.msg.userName=this.user.UserName;
    this.msg.userId = this.usrId;
    this.msg.content = this.content; 
    this.messageService.addMessage(this.msg).subscribe(()=>{
        this.router.navigate(['/show']);
    })
    })
  }

 
    

   
}
