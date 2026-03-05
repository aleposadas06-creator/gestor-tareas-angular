import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { db } from './db';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  api = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas() {
    return this.http.get(this.api);
  }

  agregarTarea(nombre: string) {

  return this.http.post<any>('http://localhost:3000/tareas', { nombre })
    .pipe(
      tap(async () => {

        await db.tareas.add({
          nombre: nombre
        });

      })
    );

  }
  
}