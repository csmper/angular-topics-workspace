import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../store/books/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from '../store/books/books.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', bookReducer),
    EffectsModule.forFeature([BooksEffects]),
    FormsModule
  ]
})
export class BooksModule { }
