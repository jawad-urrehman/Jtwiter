import { Mesg } from '../models/msg';
import { MsgService } from './../services/message-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private msgService:MsgService) { }
      msgs:Mesg;
  ngOnInit() {
    this.Showmessages();
  }
    Showmessages(){
        this.msgService.getMessages().subscribe((res)=>{
            this.msgs=res;
         
        })
    }

}
