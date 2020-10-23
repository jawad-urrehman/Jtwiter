import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http:Http) { }

getMessage(id){
  return this.http.get("http://localhost:3000/message/"+id).map(res=> res.json());
    
}
getMessagesByUser(id){
  return this.http.get("http://localhost:3000/message/user/"+id).map(res=>res.json());
}
getMessages(){
  return this.http.get("http://localhost:3000/message").map(res => res.json());
}

addMessage(msg){
  return this.http.post("http://localhost:3000/message",msg).map(res => res.json());
}


deleteMessage(id){
  return this.http.delete("http://localhost:3000/message/"+id).map(res => res.json());
}

updateMessage(id,msg){
  return this.http.put("http://localhost:3000/message/"+id,msg).map(res => res.json());
}
}
