import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  serie!: Serie;

  constructor(private serieServicio: SerieService) {}

  ngOnInit(): void {
    this.serieServicio.getSerie().subscribe((serie: Serie) => {
      this.serie = serie; // Actualiza la serie cuando hay un cambio
      console.log("Serie actualizada: ", this.serie);
    });
  }
}