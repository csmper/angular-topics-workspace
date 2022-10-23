import { createReducer, on } from "@ngrx/store";
import { bookDeleteAPISuccess, booksAPISuccess, bookSaveAPISuccess } from "./books.actions";
import { IBook } from "./books.model";

export const initialState: ReadonlyArray<IBook> = [];

export const bookReducer = createReducer(
    initialState,
    on(booksAPISuccess, (state, { books }) => books),
    on(bookSaveAPISuccess, (state, { book }) => {
        const newState = [...state];
        newState.push(book);
        return newState;
    }),
    on(bookDeleteAPISuccess, (state, { book }) => {
        const newState = [...state];
        const idx = newState.indexOf(book);
        newState.splice(idx, 1);
        return newState;
    })
);