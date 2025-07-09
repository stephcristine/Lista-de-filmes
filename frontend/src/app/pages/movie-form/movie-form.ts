import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  templateUrl: './movie-form.html',
  styleUrls: ['./movie-form.css'],
  imports: [CommonModule, FormsModule],
})
export class MovieForm implements OnInit {
  movie: Movie = { title: '', description: '', status: 'Pendente' };
  isEdit = false;

  constructor(
    private service: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.getById(id).subscribe(data => this.movie = data);
    }
  }

  save() {
    if (this.isEdit && this.movie._id) {
      this.service.update(this.movie._id, this.movie).subscribe(() => this.router.navigate(['/filmes']));
    } else {
      this.service.create(this.movie).subscribe(() => this.router.navigate(['/filmes']));
    }
  }

  cancel() {
    this.router.navigate(['/filmes']);
  }
}
