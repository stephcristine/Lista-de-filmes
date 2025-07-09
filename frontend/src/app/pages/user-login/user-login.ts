import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})

export class UserLogin {
  user = {
    email: '',
    password: '',
  };
constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log('Login attempt:', this.user);
    this.userService.login(this.user).subscribe({
      next: (res) => {
        alert('Login bem-sucedido!');
        this.router.navigate(['/filmes']);
      },
      error: (err) => {
        console.log('Login attempt:', this.user);
        alert('Email ou senha inválidos');
        console.error(err);
      }
    });
  }
}