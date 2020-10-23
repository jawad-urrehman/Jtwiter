import { UserService } from './../services/user-service';
import { User } from './../models/user_model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.css']
})
export class UserProfComponent implements OnInit {
myFrom:FormGroup
  constructor(public usrSer : UserService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.myFrom = new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
    })
 
    this.getUser()
  }
  user = new User();
  id = this.route.snapshot.params['id'];
  getUser(){
    this.usrSer.getoneUser(this.id)
        .subscribe(res=>{
          this.user= res;
          this.myFrom.setValue({
            name : this.user.UserName,
            email : this.user.email,
            password : this.user.password
          })
         
          
        })
  }
  updateUser(){
    this.user.UserName = this.myFrom.value.name;
    this.user.email = this.myFrom.value.email;
    this.user.password = this.myFrom.value.password;
    this.usrSer.updateUser(this.id,this.user).subscribe(()=>{
      this.goBack();
    });
  }

  deleteUser(){
    this.usrSer.deleteUser(this.id).subscribe(()=>{
      this.logout();
    });
  }
  
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/log'])
  }

  goBack(){
    this.router.navigate(['/home'])
  }
}



