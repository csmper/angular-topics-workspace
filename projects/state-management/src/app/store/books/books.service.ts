import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from './books.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/books');
  }

  saveBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:3000/books', book);
  }

  deleteBook(book: IBook): Observable<number> {
    return this.http.delete<number>(`http://localhost:3000/books/${book.id}`);
  }
}
