import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import 'rxjs/add/operator/map';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MovieService {
  movie: any;

  constructor(private http: Http, private httpClient: HttpClient) {}

  addMovie(movie) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/movies/addmovie', movie, {headers: headers})
      .map(res => res.json());
  }

/*
  getMovies(username) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/movies/getmovies', username, {headers: headers})
      .map(res => res.json());
  }
*/

/** GET heroes from the server */
getMovies(username): Observable<Movie[]> {

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  console.log('username');

  console.log(username);

  const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { 'username': username }
  };

  return this.httpClient.get<Movie[]>('http://localhost:3000/movies/getmovies', httpOptions);
}

/*
  getMovies(user): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  //  let params = new HttpParams();
  //  params.set("username",username);

    return this.http.post('http://localhost:3000/movies/getmovies', user, {headers: headers})
      .map(res => res.json()).toPromise();
  }


    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
    }

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
  */
}
