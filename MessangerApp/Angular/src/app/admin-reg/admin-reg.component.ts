import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService } from './../services/user-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user_model';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  constructor(private userService:UserService,public route:ActivatedRoute,
    public router:Router ) { }
    myFrom:FormGroup;
    check:boolean
    submit:boolean
    user = new User();
  ngOnInit() {
    this.check = false;
    this.submit = false;
    this.myFrom = new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
      role:new FormControl(null,Validators.required)
    })
  }

  regUser(){
    this.user.UserName = this.myFrom.value.name;
    this.user.email = this.myFrom.value.email;
    this.user.password = this.myFrom.value.password
    this.user.role = this.myFrom.value.role
    this.userService.addUser(this.user).subscribe((res)=>{
       this.submit = true;
       this.gotoAdmin()
    },
    (err)=>{
      console.error('error caught in component')
      this.check=true;
    }
    )
    
    
  }

  gotoAdmin(){
    this.router.navigate(['/admin']);
  }
}
