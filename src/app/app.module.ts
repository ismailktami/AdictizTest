import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdzMaterialModule} from './adz-material/adz-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsBooksComponent } from './details-books/details-books.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from "@angular/forms";

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
    FormsModule
  ],
  entryComponents: [
    DetailsBooksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
