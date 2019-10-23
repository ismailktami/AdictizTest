import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DetailsBooksComponent} from './details-books/details-books.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
constructor(public translate: TranslateService) {
  translate.addLangs(['en', 'fr']);

}
ngOnInit(): void {
  if (localStorage.getItem('language')) {
     this.translate.use(localStorage.getItem('language'));
  } else {
    localStorage.setItem('language', 'en');
    this.translate.use('en');

  }
}

}
