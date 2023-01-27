import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart:Array<Book> =[];

  add(book:Book){
    return this.cart.push(book);
  }

  get(){
    return this.cart;
  }
  remove(book:Book){
   return this.cart=this.cart.filter(b => b!==book);
  }
  

}
