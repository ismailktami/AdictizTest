import {Book} from '../../adz-models/adz-book.module';
import * as fromBooks from '../adz-actions/adz-books-action';
export interface BooksState {
  data: Book[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export  const initialState: BooksState = {
  data: [{
    id : 1,
name: 'ismail' ,
tittle : 'rddd'
  }],
  loaded: false,
  loading: false,
  error : ' '
};

export function reducer(
  state = initialState,
  action: fromBooks.BooksActions
): BooksState {

  switch (action.type) {
    case fromBooks.LOAD_BOOKS :  {
      return {
        ...state,
        loading: true
      };
    }
    case fromBooks.LOAD_BOOKS_FAIL :  {
      return {
        ...state,
        loaded: false,
        error: 'error'
      };
    }
    case fromBooks.LOAD_BOOKS_SUCCESS :  {
      return {
        ...state,
        loaded: true
      };
    }
  }
  return state;
}
export  const getBooksLoading = (state: BooksState) => state.loading;
export  const getBooksLoaded = (state: BooksState) => state.loaded;
export  const getBooksError = (state: BooksState) => state.error;
export  const getBooks = (state: BooksState) => state.data;
