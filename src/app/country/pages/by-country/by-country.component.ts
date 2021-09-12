import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  term: string = "";
  errorFound: boolean = false;

  constructor(private countryService: CountryService) { }

  search(){
    this.errorFound = false;
    console.log(this.term);
    this.countryService.searchCountry(this.term)
    .subscribe((resp) => {
      console.log(resp);
    }, (err) =>{
      this.errorFound = true;
    })
  }

}
