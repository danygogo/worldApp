import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';
import { CapitalResponse } from '../interfaces/capital.interface';
import { RegionResponse } from '../interfaces/region.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }


  searchCountry(term: string):Observable<CountryResponse[]>{ //El tipo se saca de la interface

    const url = `${this.apiURL}/name/${term}`
    return this.http.get<CountryResponse[]>(url)
      
  }

  getCountryByAlpha(id: string):Observable<CountryResponse>{ //El tipo se saca de la interface
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<CountryResponse>(url)
      
  }

  searchCapital(term: string):Observable<CapitalResponse[]>{ //the type comes from the interface
    const url = `${this.apiURL}/capital/${term}`
    return this.http.get<CapitalResponse[]>(url)
  }

  searchRegion(term: string):Observable<RegionResponse[]>{ //the type comes from the interface
    const url = `${this.apiURL}/region/${term}`
    return this.http.get<RegionResponse[]>(url)
  }
}


