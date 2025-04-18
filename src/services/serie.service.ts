import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Serie } from '../series';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private serieSubject = new BehaviorSubject<Serie>({
    id: 0,
    name: '',
    seasons: 0,
    description: '',
    channel: '',
    webpage: '',
    poster: ''
  });

  constructor() { }

  getSerie() {
    return this.serieSubject.asObservable(); // Permite que los componentes se suscriban
  }

  setSerie(serie: Serie): void {
    this.serieSubject.next(serie); // Emite un nuevo valor
  }
}