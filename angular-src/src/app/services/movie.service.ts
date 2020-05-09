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

  deleteMovie(movie) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/movies/deletemovie', movie, {headers: headers})
      .map(res => res.json());
  }

  /** GET heroes from the server */
  getMovies(username): Observable<Movie[]> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const httpOptions = {
        headers: { 'Content-Type': 'application/json' },
        params: { 'username': username }
    };

    return this.httpClient.get<Movie[]>('http://localhost:3000/movies/getmovies', httpOptions);
  }

}
