import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  _id?: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Assistido';
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = 'http://localhost:8000/api/filmes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  update(id: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, movie);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
