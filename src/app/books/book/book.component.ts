import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
// private varname = new User();
constructor(private cartService : CartService){}
ngOnInit(): void {
  
}

@Input() book : Book={} as Book; 

@Output() emitBook = new EventEmitter<Book>();

isInCart:boolean = false;

addToCard(){
  alert('Product has been added to cart !!!');
  // this.emitBook.emit(this.book);
  this.isInCart=true;
  this.cartService.add(this.book);

}
removeToCard(){
  this.isInCart=false;
  this.cartService.remove(this.book);
}

}
