import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResponse } from '../../interfaces/country.interface';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: CountryResponse
  currency: any[] = []


  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap((params) => this.countryService.getCountryByAlpha(params.id)),
      tap(console.log)
    )
    .subscribe(resp =>{
      this.country = resp
      this.currency = this.country.currencies
    })

  }

}
