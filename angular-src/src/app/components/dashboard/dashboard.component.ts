import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Movie } from '../../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[];

  welcomemessage: String;

  constructor(private movieService: MovieService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    let username = JSON.parse(localStorage.getItem('user')).username;
    this.getMovies(username);

    if(this.movies) {
      this.welcomemessage = "Movies you have entered are: ";
    } else {
      this.welcomemessage = "You have no movies entered.";
    }
  }

  getMovies(username): void {
    this.movieService.getMovies(username)
    .subscribe(movies => this.movies = movies);
  }

  deleteMovie(movie): void {
    this.movieService.deleteMovie(movie).subscribe();
    window.location.reload();
  }

}
