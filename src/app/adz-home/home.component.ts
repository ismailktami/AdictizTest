import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'adz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   word =  '';
  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  search() {
  this.router.navigate(['/search-books', this.word]);

  }
}
