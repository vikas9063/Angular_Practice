import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
user:any=null;
  constructor() { }
  isUserLoggedIn(){
    this.user = JSON.parse(localStorage.getItem("token") || "[]");
    console.log("hggggg"+this.user)
    if(this.user != "" && this.user != null){
      return true;
    }else{
      return false;
    }
  }


}
