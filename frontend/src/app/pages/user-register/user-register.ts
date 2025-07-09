import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css'
})

export class UserRegister {
  user = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.register(this.user).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        alert('Erro ao cadastrar usuário');
        console.error(err);
      }
    });
  }
}