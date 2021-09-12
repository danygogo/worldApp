import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  term: string = ""

  constructor(private countryService: CountryService) { }

  search(){
    console.log(this.term);
    var result = this.countryService.searchCountry(this.term)
    .subscribe(resp => {
      console.log(resp)
    })
    
  }


}
