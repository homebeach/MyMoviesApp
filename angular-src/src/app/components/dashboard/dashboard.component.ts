import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private authService: AuthService) {}

  ngOnInit() {
    let username = JSON.parse(localStorage.getItem('user')).username);
    this.getMovies(username);
  }

  getMovies(username): void {
    this.movieService.getMovies(username)
    .subscribe(movies => this.movies = movies);
  }

}
