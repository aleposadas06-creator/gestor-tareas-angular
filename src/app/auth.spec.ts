import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = false;

  login() {
    this.logged = true;
  }

  isLogged(): boolean {
    return this.logged;
  }
}
