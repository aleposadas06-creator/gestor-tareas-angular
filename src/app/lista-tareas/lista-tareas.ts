import { Component, HostBinding, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../tareas';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.html',
  styleUrls: ['./lista-tareas.css']
})
export class ListaTareas implements OnInit {

  @HostBinding('class')
  hostClass = 'd-block';

  tareas: any[] = [];
  nuevaTarea = '';
  mensajeVisible = false;

  constructor(
    private tareasService: TareasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  this.cargarTareas();
}

cargarTareas() {
  this.tareasService.obtenerTareas().subscribe((data: any) => {

    this.tareas = data;

    this.cdr.detectChanges();

  });
}

  agregarTarea() {

  if (!this.nuevaTarea.trim()) return;

  this.tareasService.agregarTarea(this.nuevaTarea)
    .subscribe(() => {

      this.nuevaTarea = '';
      this.cargarTareas();

      this.mensajeVisible = true;

      setTimeout(() => {
        this.mensajeVisible = false;
        this.cdr.detectChanges();
      }, 2000);

    });

}

  guardarCambios() {

  const tareasPendientes = this.tareas.filter(t => !t.completada);

  if (tareasPendientes.length === this.tareas.length) {
    alert("No hay tareas marcadas para eliminar");
    return;
  }

  this.tareas = tareasPendientes;

  this.mensajeVisible = true;

setTimeout(() => {
  this.mensajeVisible = false;
}, 2000);

  }

}