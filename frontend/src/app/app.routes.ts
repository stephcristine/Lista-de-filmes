import { Routes } from '@angular/router';
import { UserRegister } from './pages/user-register/user-register';
import { UserLogin } from './pages/user-login/user-login';
import { MovieList } from './pages/movie-list/movie-list'; 
import { MovieForm } from './pages/movie-form/movie-form'; 

export const routes: Routes = [
  { path: 'cadastro', component: UserRegister },
  { path: 'login', component: UserLogin },
  { path: 'filmes', component: MovieList },
  { path: 'filmes/novo', component: MovieForm },
  { path: 'filmes/editar/:id', component: MovieForm },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' }
];
