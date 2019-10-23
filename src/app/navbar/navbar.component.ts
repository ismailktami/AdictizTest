import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'adz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {
  }
  changeLanguage(lang) {
    if (lang === 'fr') {
      this.translate.use('fr'); localStorage.setItem('language', 'fr');
    } else {
      this.translate.use('en'); localStorage.setItem('language', 'en');

    }
    }
}
