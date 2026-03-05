import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

 login() {

  const ok = this.auth.login(this.username, this.password);

  if (ok) {

    console.log("Usuario logueado");

    this.router.navigateByUrl('/tareas');

  } else {

    alert('Credenciales inválidas');

  }

}

}