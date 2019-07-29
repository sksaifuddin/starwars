import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MoviesResponse, Movies } from '../models/movies.model';
import { Species } from '../models/species.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterFilterService {
  movieFilter = new Subject();
  speciesFilter = new Subject();
  birthYearFilter = new Subject();
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movies[]> {
    return this.http.get<MoviesResponse>(environment.apiUrl + 'films').pipe(
      map((val) => val.results.map( movies => movies ))
    );
  }

  filterByMovie(value: Movies) {
    this.movieFilter.next(value);
  }

  filterBySpecies(value: Species) {
    this.speciesFilter.next(value);
  }

  filterByBirthYear(value) {
    this.birthYearFilter.next(value);
  }

}
