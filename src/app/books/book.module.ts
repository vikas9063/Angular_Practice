import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookServiceService } from './book-service.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';




@NgModule({
  declarations: [BooksComponent,BookComponent],
  providers:[BookServiceService],
  imports: [
    CommonModule
  ],
  exports:[BooksComponent]
})
export class BookModule { }
