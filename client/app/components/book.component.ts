import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book',
  templateUrl: '../views/books.html',
  providers: [ BookService ],
  moduleId: module.id
})

export class BookComponent {
  title = 'MEAN SPA with Angular Two';
  books: Array<any>;
  
  // constructor
  constructor (private bookService: BookService) {
    // call get as soon as component is instantiated
    this.getBooks();
  }
  
  // get all from our service (intead of subscribe function)
  getBooks() {
    this.bookService.getBooks().then(response => {
      this.books = response;
    })
  }
}