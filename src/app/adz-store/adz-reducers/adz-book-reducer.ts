import * as fromBooks from '../adz-actions/adz-books-action';
export interface BooksState {
  data: any[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export  const initialState: BooksState = {
  data: [],
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
      const d = action.payload;

      return {
        ...state,
        loaded: true,
        data: d

      };
    }
  }
  return state;
}
export  const getBooksLoading = (state: BooksState) => state.loading;
export  const getBooksLoaded = (state: BooksState) => state.loaded;
export  const getBooksError = (state: BooksState) => state.error;
export  const getBooks = (state: BooksState) => state.data;
