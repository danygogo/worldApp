import { Component } from '@angular/core';
import { RegionResponse } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  activeRegion: string = " ";
  countries: RegionResponse[] = [];
  errorFound: boolean = false;
  elements: number = 0;

  constructor(private countryService: CountryService) { }

  activateRegion(region: string){
    if(region === this.activeRegion){return;}//this avoids to reload activeRegion if the user uses the same button
    this.activeRegion = region;
    this.countryService.searchRegion(this.activeRegion)
    .subscribe((resp) => {
      this.countries = resp;
    }, (err) =>{
      this.errorFound = true;
      this.countries = [];
    })
  }
}
