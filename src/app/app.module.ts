import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdzMaterialModule} from './adz-material/adz-material.module';
import { NavbarComponent } from './adz-navbar/navbar.component';
import { HomeComponent } from './adz-home/home.component';
import { SearchResultsComponent } from './adz-search-results/search-results.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient , HTTP_INTERCEPTORS } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DetailsBooksComponent} from './adz-details-books/details-books.component';
import {reducers} from './adz-store/adz-reducers/adz-index';
import {StoreModule} from '@ngrx/store';
import {effects} from './adz-store/adz-effects/adz-effects-index';
import {EffectsModule} from '@ngrx/effects';
import {NgProgressModule, NgProgressInterceptor} from 'ngx-progressbar';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsBooksComponent,
    HomeComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdzMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forFeature('books', reducers),
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature(effects),
    EffectsModule.forRoot(effects),
    NgProgressModule

  ],
  entryComponents: [
    DetailsBooksComponent
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
