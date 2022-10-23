import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI, invokeDeleteBookAPI, invokeSaveBookAPI } from '../store/books/books.actions';
import { IBook } from '../store/books/books.model';
import { selectBooks } from '../store/books/books.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  book$ = this.store.pipe(select(selectBooks));
  title: string = '';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
  }

  addBook() {
    const newBook: IBook = {
      id: 0,
      title: this.title,
      author: '',
      cost: 0
    };
    this.title = '';
    this.store.dispatch(invokeSaveBookAPI({ book: newBook }));
  }

  deleteBook(book: IBook) {
    this.store.dispatch(invokeDeleteBookAPI({ book: book }));
  }

}
