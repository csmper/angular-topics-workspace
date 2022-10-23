import { createFeatureSelector } from "@ngrx/store"
import { IBook } from "./books.model"

export const selectBooks = createFeatureSelector<IBook[]>('books');