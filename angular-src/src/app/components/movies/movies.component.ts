import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviename: String;

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) {}
  ngOnInit() {
  }

  onAddMovieSubmit() {
    const movie = {
      username: JSON.parse(localStorage.getItem('user')).username,
      moviename: this.moviename
    }

    // Register user
    this.movieService.addMovie(movie).subscribe(data => {
    if(data.success) {
      this.flashMessage.show('New movie added.', {cssClass: 'alert-success', timeout: 3000});
      //this.router.navigate(['/addmovie']);
    } else {
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      //this.router.navigate(['/addmovie']);
    }
  });
  }

}
