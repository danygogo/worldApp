import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
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
  elements: number = 0;

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
  }

  search(term : string){
    console.log("se encuentra en by capital")
    this.errorFound = false;
    this.term = term;
    console.log(this.term);
    this.capitalService.searchCapital(this.term)
    .subscribe((resp) => {
      console.log("estoy en el observable by-capital")
      this.countries = resp;
      this.elements = this.countries.length;
    }, (err) =>{
      this.errorFound = true;
      this.countries = [];
    })
  }

  suggestion(term: string){
    this.errorFound = false;
    //TO DO
  }

}
