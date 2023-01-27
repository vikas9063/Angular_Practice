import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../interfaces/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  form:LoginForm={
    email:'',
    password:''
  }

  normalUser:string=JSON.stringify({
    "token":"gggg4434ftsgzuyghx77x7x474xx7trts65gfhf6ddd6fgfg",
    "ROLE":"NORMAL"
})

adminUser:string=JSON.stringify({
  "token":"gggg4434ftsgzuyghx77x7x474xx7trts65gfhf6ddd6fgfasd666g",
  "ROLE":"ADMIN"
})

submit(){
    if(this.form.email ==='vikas@gmail.com' && this.form.password === '12345678'){
      localStorage.setItem("token", this.normalUser)
    }else if(this.form.email ==='vikas2@gmail.com' && this.form.password === '12345678'){
      localStorage.setItem("token", this.adminUser)
    }else{
      return;

    }
    return this.router.navigate(['cart'])
}

}
