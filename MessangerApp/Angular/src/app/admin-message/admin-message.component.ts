import { Mesg } from './../models/msg';
import { MsgService } from './../services/message-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {
msgs:Mesg
  constructor(private msgService:MsgService) { }

  ngOnInit() {
    this.getMessages()
  }

getMessages(){
  this.msgService.getMessages().subscribe((res)=>{
    this.msgs = res;
  })
}

  deltemessage(id){
    this.msgService.deleteMessage(id).subscribe(()=>{
      this.getMessages();
    });
}

}
