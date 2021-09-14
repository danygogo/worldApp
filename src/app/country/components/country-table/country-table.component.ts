import { Component, OnInit, Input } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { RegionResponse } from '../../interfaces/region.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  @Input("data") countries: CountryResponse[] = []
  @Input("data2") countries2: RegionResponse[] = []

  constructor() {}

  ngOnInit(): void {
  }

}
