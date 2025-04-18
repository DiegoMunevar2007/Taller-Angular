import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { HttpServiceService } from '../httpService.service';
@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  private seriesArray : Serie[]

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.seriesArray = this.httpService.getSeries().sub

  }

}
