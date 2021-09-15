import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CapitalResponse } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {
  term: string = "";
  errorFound: boolean = false;
  countries: CapitalResponse[] = [];
  suggested: CapitalResponse[] = [];
  elements: number = 0;

  constructor(private capitalService: CountryService) { }

  ngOnInit(): void {
  }

  search(term : string){
    this.errorFound = false;
    this.term = term;
    this.capitalService.searchCapital(this.term)
    .subscribe((resp) => {
      this.countries = resp;
      this.elements = this.countries.length;
    }, (err) =>{
      this.errorFound = true;
      this.countries = [];
    })
  }

  suggestion(term: string){
    this.errorFound = false;
    this.capitalService.searchCapital(term)
    .subscribe(resp => {
      this.suggested = resp.splice(0,5)
    },
    (err) => this.suggested = []
  )
  }

}
