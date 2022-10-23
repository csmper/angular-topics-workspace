import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { bookDeleteAPISuccess, booksAPISuccess, bookSaveAPISuccess, invokeBooksAPI, invokeDeleteBookAPI, invokeSaveBookAPI } from "./books.actions";
import { BooksService } from "./books.service";

@Injectable()
export class BooksEffects {
    constructor(private action$: Actions, private booksService: BooksService) {}

    loadBooks$ = createEffect(() => this.action$.pipe(
        ofType(invokeBooksAPI),
        switchMap(() => {
            return this.booksService
                .getBooks()
                    .pipe(
                        map((books) => booksAPISuccess({ 
                            books: books 
                        })
                    )
                )
        })
    ));

    saveBook$ = createEffect(() => this.action$.pipe(
        ofType(invokeSaveBookAPI),
        switchMap((action) => {
            return this.booksService
                .saveBook(action.book)
                    .pipe(
                        map((book) => bookSaveAPISuccess({
                            book: book
                        })
                    )
                )
        })
    ));

    deleteBook$ = createEffect(() => this.action$.pipe(
        ofType(invokeDeleteBookAPI),
        switchMap((action) => {
            return this.booksService
                .deleteBook(action.book)
                    .pipe(
                        map(() => bookDeleteAPISuccess({
                            book: action.book
                        }))
                    )
        })
    ))
}