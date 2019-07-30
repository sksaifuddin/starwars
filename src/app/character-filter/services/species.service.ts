import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Species, SpeciesResponse } from '../models/species.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  constructor(private http: HttpClient) { }

  getSpecies(i): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(environment.apiUrl + 'species/?page=' + i);
  }

}
