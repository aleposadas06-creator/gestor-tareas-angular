import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  tareas: any[] = [];

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

}