import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'rss-vky',
  templateUrl: './vky.component.html',
  styleUrls: ['./vky.component.css']
})
export class VkyComponent {

  card: Book[] = [];

  addToCard(event:any){
    console.log(event);
  }


}
