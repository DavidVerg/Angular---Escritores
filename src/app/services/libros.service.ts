import { Libro } from './../models/libro.model';
import { LIBROS } from './../db/libros.db';
import { Injectable } from '@angular/core';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(escritorId): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter(libro => {
        return libro.escritor === escritorId;
      });
      resolve(arrFiltrado);
    });
  }
}
