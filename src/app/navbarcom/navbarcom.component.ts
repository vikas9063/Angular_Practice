import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbarcom',
  templateUrl: './navbarcom.component.html',
  styleUrls: ['./navbarcom.component.css']
})
export class NavbarcomComponent implements OnInit {
  constructor(private cartService: CartService, private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {

  }

  getCart() {
    return this.cartService.get();
  }
  isUserLoggedIn() {
    return this.loginService.isUserLoggedIn();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
