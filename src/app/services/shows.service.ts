import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Show } from '../models/show';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private showsUrl = environment.baseUrl + 'shows';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET current shows from the server */
  getCurrentShows (): Observable<Show[]> {
    return this.http.get<Show[]>(this.showsUrl, httpOptions)
      .pipe(
        tap(shows => this.log('Shows fetched')),
        catchError(this.handleError('getShows', []))
      );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a ShowsService message */
    private log(message: string) {
      console.log(`ShowsService: ${message}`);
    }
}
