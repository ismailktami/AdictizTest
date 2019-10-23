import {Action} from '@ngrx/store';

export const LOAD_BOOKS = '[Books] Load books';
export const LOAD_BOOKS_FAIL = '[Books] Load books Failed';
export const LOAD_BOOKS_SUCCESS = '[Books] Load books Success';


export  class LoadBooks implements  Action {
  readonly type = LOAD_BOOKS;
    constructor(public payload: string ) {}

}
export  class LoadBooksFail implements  Action {
  readonly type = LOAD_BOOKS_FAIL;
  constructor(public payload: any ) {}


}
export  class LoadBooksSuccess implements  Action {
  readonly type = LOAD_BOOKS_SUCCESS;
  constructor(public payload: any[] ) {}
}


export  type BooksActions = LoadBooks | LoadBooksSuccess |LoadBooksFail;
