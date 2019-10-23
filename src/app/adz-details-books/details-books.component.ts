import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'adz-details-books',
  templateUrl: './details-books.component.html',
  styleUrls: ['./details-books.component.css']
})
export class DetailsBooksComponent implements OnInit {
   book: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
     console.log(this.data.book);
     this.book = this.data.book.volumeInfo;

          }

}
