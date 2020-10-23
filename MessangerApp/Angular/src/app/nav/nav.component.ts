import { User } from './../models/user_model';
import { UserService } from './../services/user-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router:Router, private usrSer:UserService) { }
id:string;

  ngOnInit() {
  }

  isAdmin(){
    return this.usrSer.isAdmin()
  }

  isLogggedIn(){
    this.id = localStorage.getItem('UserId');
    return this.usrSer.loggedIn();
  }
  

  logout(){
    localStorage.clear();
    this.router.navigate(['/log'])
  }

}
