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
  suggestedCountries: CountryResponse[] = [];
  elements: number = 0;
  


  constructor(private countryService: CountryService) { }

  search(term : string){
    this.errorFound = false;
    this.term = term;
    this.countryService.searchCountry(this.term)
    .subscribe((resp) => {
      this.countries = resp;
      this.elements = this.countries.length;
      console.log(this.countries)
    }, (err) =>{
      this.errorFound = true;
      this.countries = [];
    })
  }

  suggestion(term: string){
    this.errorFound = false;
    
    this.countryService.searchCountry(term)
      .subscribe(resp => {
        this.suggestedCountries = resp.splice(0,5)
      },
      (err) => this.suggestedCountries = []
    )
  }

}
