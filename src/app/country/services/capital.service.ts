import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { CapitalResponse } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiURL: string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }

  searchCapital(term: string):Observable<CapitalResponse[]>{ //the type comes from the interface
    console.log("se ejecuta el service")
    const url = `${this.apiURL}/capital/${term}`
    return this.http.get<CapitalResponse[]>(url)
      
  }
}
