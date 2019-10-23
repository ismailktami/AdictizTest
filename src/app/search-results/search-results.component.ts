import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DetailsBooksComponent} from '../details-books/details-books.component';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromStoreReducers from '../adz-store/adz-reducers/adz-book-reducer';
import * as fromStoreActions from '../adz-store/adz-actions/adz-books-action';
import * as fromStoreReducersIndex from '../adz-store/adz-reducers/adz-index';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, filter, map} from 'rxjs/operators';
@Component({
  selector: 'adz-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  word: string;
  books: any[];
  filterBy = 'Title';
  motcle = ' ';
  wordSearching: any[] = [
    {value: 'Authors'},
    {value: 'Title'},
    {value: 'Description'}];
  constructor(public dialog: MatDialog, private route: ActivatedRoute , private store: Store<fromStoreReducers.BooksState> ) {}
  ngOnInit(): void {
    this.word = this.route.snapshot.paramMap.get('word');
    this.store.dispatch(new fromStoreActions.LoadBooks(this.word));
    this.eventInputSearching();
    this.store.select<any>(fromStoreReducersIndex.getAllBooks).subscribe(data => {
      this.books = data;
    });
  }

     loadData(word) {
    this.store.select<any>(fromStoreReducersIndex.getAllBooks).subscribe(data => {
        if (this.filterBy === 'Title') {
          (data as any[]).filter(obj => {
            this.filterByTittle(obj, word);
          });
        } else if (this.filterBy === 'Description') {
          (data as any[]).filter(obj => {
            this.filterByDescription(obj, word);
          });
        } else {
          (data as any[]).filter(obj => {
            this.filterByAuthors(obj, word);
          });
        }


      });
  }

  showDetails(book) {
    this.dialog.open(DetailsBooksComponent, {data: {book}});
    this.dialog.afterAllClosed.subscribe(result => {
    });
  }

   eventInputSearching() {
    const keyups = fromEvent(document.querySelector('#search'), 'keyup');
    keyups.pipe(debounceTime(1000)).subscribe((event: any ) => {
      this.books = [];
      this.loadData(event.target.value);
    });
  }
  eventSelection() {
      this.loadData(this.word);

  }





  filterByTittle(obj, word) {
    if ((obj.volumeInfo.title as string).toLocaleLowerCase().trim().includes(word.toLowerCase())) {
        this.books.push(obj);
        return true;
    } else {
      return false;
    }  }

  filterByAuthors(obj, word) {
    if (obj.volumeInfo.authors) {
      for (const auth of obj.volumeInfo.authors) {
        if ((auth as string).toLocaleLowerCase().includes(word.toLowerCase())) {
          this.books.push(obj);
          return true;
        }
      }
      return false;
    }
  }
  filterByDescription(obj, word) {
    if (obj.volumeInfo.description) {
      if ((obj.volumeInfo.description as string).trim().toLowerCase().includes(word.toLowerCase())) {
        this.books.push(obj);
        return true;
      }
    }
    return false;
    }

}

