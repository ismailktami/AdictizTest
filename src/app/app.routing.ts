import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultsComponent} from './search-results/search-results.component';
const appRoutes: Routes =
  [
    {path: '', component : HomeComponent},
    {path: 'search-books/:word', component: SearchResultsComponent},
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
