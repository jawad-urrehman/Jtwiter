import { UserService } from './services/user-service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardAdmin implements CanActivate {
  constructor (private UserSer:UserService, private router:Router){

  }

  canActivate() {
    if(this.UserSer.isAdmin()) {
        console.log(localStorage.getItem('role'))
        return true;
      } else {
        this.router.navigate(['/reg']);
        return false;
      }
  }
}