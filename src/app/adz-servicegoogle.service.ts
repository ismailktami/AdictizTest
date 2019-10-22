import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdzServicegoogleService {
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient) { }



  getBooksbyword(word: string) {
    return this.http.get(this.url + word);
  }
}
