import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DetailsBooksComponent} from '../details-books/details-books.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStoreReducers from '../adz-store/adz-reducers/adz-book-reducer';
import * as fromStoreActions from '../adz-store/adz-actions/adz-books-action';
import * as fromStoreReducersIndex from '../adz-store/adz-reducers/adz-index';
import * as fromEffects from '../adz-store/adz-effects/adz-books-effects';
@Component({
  selector: 'adz-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  word: string;
  books: [];
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];
  ngOnInit(): void {
    this.word = this.route.snapshot.paramMap.get('word');
    this.store.dispatch(new fromStoreActions.LoadBooks(this.word));
    this.store.select<any>(fromStoreReducersIndex.getAllBooks).subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }


  constructor(public dialog: MatDialog, private route: ActivatedRoute , private store: Store<fromStoreReducers.BooksState>) {}

  showDetails(book) {
    this.dialog.open(DetailsBooksComponent, {data: {book}});
    this.dialog.afterAllClosed.subscribe(result => {
    });
  }
}
