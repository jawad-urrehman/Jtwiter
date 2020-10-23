import { Mesg } from './../models/msg';
import { MsgService } from './../services/message-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-msg',
  templateUrl: './edit-msg.component.html',
  styleUrls: ['./edit-msg.component.css']
})
export class EditMsgComponent implements OnInit {

  constructor(private msgSer : MsgService,public route:ActivatedRoute,
    public router:Router) { }
    
  ngOnInit() {
    this.getMesg()
  }
  id = this.route.snapshot.params['id'];
  msg = new Mesg();

  getMesg(){
    this.msgSer.getMessage(this.id)
        .subscribe(res=>{
          this.msg = res;
        })
  }
  

  updateMsg(){
    this.msg.content = this.msg.content;
    this.msgSer.updateMessage(this.id,this.msg).subscribe(()=>{
      this.goBack();
    })
  }
 
  
goBack(){

  this.router.navigate(['/msg'])
}
}
