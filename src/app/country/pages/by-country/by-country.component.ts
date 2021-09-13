import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  term: string = "";
  errorFound: boolean = false;
  countries: CountryResponse[] = [];
  elements: number = 0;
  


  constructor(private countryService: CountryService) { }

  search(){
    this.errorFound = false;
    console.log(this.term);
    this.countryService.searchCountry(this.term) //devuelve el arreglo
    .subscribe((resp) => {
      this.countries = resp;
      this.elements = this.countries.length;
    }, (err) =>{
      this.errorFound = true;
      this.countries = [];
    })
  }

}
