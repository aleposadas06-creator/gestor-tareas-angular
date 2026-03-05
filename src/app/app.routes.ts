import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListaTareas } from './lista-tareas/lista-tareas';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'tareas',
    component: ListaTareas,
    canActivate: [authGuard]
  }

];