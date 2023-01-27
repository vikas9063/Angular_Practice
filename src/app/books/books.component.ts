import { Component,OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookServiceService } from './book-service.service';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
constructor(private bookService:BookServiceService){};
books:Book[] =this.bookService.getBook();

localStorageItem : string = localStorage.getItem("cart") || '[]';

card: Book[] = JSON.parse(this.localStorageItem);
ngOnInit():void{

};
// addToCard(event:Book){
//   console.log(event);
//   this.card[this.card.length]=event;
//   //localStorage.setItem("cart", JSON.stringify(this.card));
//   console.log(this.card.length);
// }

}
