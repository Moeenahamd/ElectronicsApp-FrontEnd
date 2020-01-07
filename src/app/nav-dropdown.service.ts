import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import {NavCategory}from './nav-categories'
import {NavItem}from './nav-item'
@Injectable({
  providedIn: 'root'
})
export class NavDropdownService {

  categories = 'https://localhost:44320/api/API';
  
  
  items:NavItem[];
  constructor(private http: HttpClient) { }
  
  set_categories(categories:NavCategory[]){}
  get_categories():Observable<NavCategory[]>{
    return this.http.get<NavCategory[]>(this.categories)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
