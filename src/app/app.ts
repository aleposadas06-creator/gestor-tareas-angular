import { Component } from '@angular/core';
import { ListaTareas } from './lista-tareas/lista-tareas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareas],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}