import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Character } from 'src/app/character-list/models/character.model';
import { Observable } from 'rxjs';
import { Species } from 'src/app/character-filter/models/species.model';
import { SpaceShips } from '../models/space-ships.model';
import { Movies } from 'src/app/character-filter/models/movies.model';


@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  constructor(private http: HttpClient) { }

  getCharacterDetails(id: number): Observable< Character> {
    return this.http.get<Character>(environment.apiUrl + 'people/' + id );
  }

  getSpeciesDetails(url: string): Observable<Species> {
    return this.http.get<Species>(url);
  }

  getSpaceShipDetails(url: string): Observable<SpaceShips> {
    return this.http.get<SpaceShips>(url);
  }

  getMoviesDetails(url: string): Observable<Movies> {
    return this.http.get<Movies>(url);
  }

}
