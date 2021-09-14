import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';


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

}

