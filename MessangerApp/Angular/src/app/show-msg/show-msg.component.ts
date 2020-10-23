import { Mesg } from './../models/msg';
import { MsgService } from './../services/message-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-msg',
  templateUrl: './show-msg.component.html',
  styleUrls: ['./show-msg.component.css']
})
export class ShowMsgComponent implements OnInit {

  constructor(private msgService:MsgService,public route:ActivatedRoute,
    public router:Router) { }
  Usermsgs:Mesg;
  ngOnInit() {
    this.getMessageByUserId();

  }
  UserId:string;
    getMessageByUserId(){
        this.UserId = sessionStorage.getItem('UserId');
        this.msgService.getMessagesByUser(this.UserId).subscribe((res)=>{
          this.Usermsgs=res;
          this.router.navigate(['/msg']);
        })
    }

    

    deltemessage(id){
        this.msgService.deleteMessage(id).subscribe(()=>{
          this.getMessageByUserId();
        });
    }
}
