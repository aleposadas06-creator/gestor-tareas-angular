import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.html',
  styleUrls: ['./lista-tareas.css']
})
export class ListaTareas {

  @HostBinding('class')
  hostClass = 'd-block';

  tareas = [
    { nombre: 'Estudiar Angular', completada: false },
    { nombre: 'Hacer el proyecto', completada: false },
    { nombre: 'Subir a GitHub', completada: false }
  ];

  nuevaTarea = '';
  mensajeVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  agregarTarea() {
    if (!this.nuevaTarea.trim()) return;

    this.tareas.push({
      nombre: this.nuevaTarea.trim(),
      completada: false
    });

    this.nuevaTarea = '';
    this.mensajeVisible = true;

    setTimeout(() => {
      this.mensajeVisible = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  guardarCambios() {
    this.tareas = this.tareas.filter(t => !t.completada);
  }
}