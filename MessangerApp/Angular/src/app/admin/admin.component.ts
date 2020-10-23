import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
User(){
this.route.navigate(['/adminUser'])
}

Reg(){
  this.route.navigate(['/adminReg'])
}

Msg(){
  this.route.navigate(['/adminMsg'])
}
}
