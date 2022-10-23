import { createAction, props } from "@ngrx/store";
import { IBook } from "./books.model";

export const invokeBooksAPI = createAction('[Books API] invoke books Fetch API');
export const booksAPISuccess = createAction('[Books API] books Fetch API Success', props<{ books: IBook[] }>());

export const invokeSaveBookAPI = createAction('[Book API] invoke book save API', props< { book: IBook }>());
export const bookSaveAPISuccess = createAction('[Book API] book save API Success', props<{ book: IBook}>());

export const invokeDeleteBookAPI = createAction('[Book API] invoke book delete API', props< { book: IBook }>());
export const bookDeleteAPISuccess = createAction('[Book API] book delete API Success', props<{ book: IBook}>());


