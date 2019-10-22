import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromBooks from '../adz-reducers/adz-book-reducer';

export interface BooksState {
  books: fromBooks.BooksState;
}
export const reducers: ActionReducerMap<BooksState> = {
 books : fromBooks.reducer
};
export const selector = createFeatureSelector<BooksState>('books');
export const getAllBooks = createSelector(selector, (state: BooksState ) => state.books.data);
