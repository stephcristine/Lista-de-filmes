import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css'],
})
export class MovieList implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAll().subscribe((data) => {
      this.movies = data;
    });
  }

  delete(id: string) {
    this.movieService.delete(id).subscribe(() => {
      this.movies = this.movies.filter((m) => m._id !== id);
    });
  }

  toggle(movie: Movie) {
    const updated = {
      ...movie,
      status: (movie.status === 'Pendente' ? 'Assistido' : 'Pendente') as 'Pendente' | 'Assistido',
    };

    this.movieService.update(movie._id!, updated).subscribe(() => {
      movie.status = updated.status;
    });
  }
}
