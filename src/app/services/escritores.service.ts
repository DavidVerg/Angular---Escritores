import { Escritor } from './../models/escritor.model';
import { ESCRITORES } from './../db/escritores.db';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      });
      resolve(arrFiltrado);
    });
  }

  getById(escritorId): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorFound = ESCRITORES.find(escritor => {
        return escritor.id === escritorId;
      });
      resolve(escritorFound);
    });
  }

}
