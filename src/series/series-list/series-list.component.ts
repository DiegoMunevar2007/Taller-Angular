import { Component, OnInit } from '@angular/core';
import { Serie } from '../../series';
import { HttpServiceService } from '../../services/httpService.service';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  seriesArray: Serie[] = [];
  promedioSeries: number = 0;

  constructor(private httpService: HttpServiceService, private seriesService: SerieService) {}

  getSeries() {
    this.httpService.getSeries().subscribe((datos: Serie[]) => {
      this.seriesArray = datos;
      for (const element of this.seriesArray) {
        this.promedioSeries += element.seasons;
      }
      this.promedioSeries = this.promedioSeries / this.seriesArray.length;
    });
  }

  serieSeleccionada(serie: Serie) {
    this.seriesService.setSerie(serie); // Notifica el cambio
    console.log("Serie seleccionada: ", serie);
  }

  ngOnInit() {
    this.getSeries();
  }
}