import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviesResponse, Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterFilterService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movies[]> {
    return this.http.get<MoviesResponse>(environment.apiUrl + 'films').pipe(
      map((val) => val.results.map( movies => movies ))
    );
  }
}
