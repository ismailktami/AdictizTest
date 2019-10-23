import {Injectable} from '@angular/core';
import {Actions, Effect , ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable , of } from 'rxjs';
import {map, mergeMap, catchError, filter, debounceTime} from 'rxjs/operators';
import * as booksActions from '../adz-actions/adz-books-action';
import {AdzServicegoogleService} from '../../adz-servicegoogle.service';

// @ts-ignore
@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: AdzServicegoogleService
  ) {
  }


  @Effect()
  loadBooks: Observable<Action> = this.actions$.pipe(
    ofType<booksActions.LoadBooks>(
      booksActions.LOAD_BOOKS
    ),
    mergeMap((action: booksActions.LoadBooks) =>
      this.booksService.getBooksbyword(action.payload).pipe(
        map(
          (data: any[]) => new booksActions.LoadBooksSuccess((data as any).items),
        catchError(err => of(new booksActions.LoadBooksFail(err)))
      )
    )
  )
);

}
