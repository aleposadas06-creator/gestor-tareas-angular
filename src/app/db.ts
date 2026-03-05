import Dexie, { Table } from 'dexie';

export interface Tarea {
  id?: number;
  nombre: string;
}

export class AppDB extends Dexie {

  tareas!: Table<Tarea>;

  constructor() {
    super('TareasDB');

    this.version(1).stores({
      tareas: '++id,nombre'
    });

  }

}

export const db = new AppDB();