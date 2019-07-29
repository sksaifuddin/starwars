import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Character } from 'src/app/character-list/models/character.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  constructor(private http: HttpClient) { }

  getCharacterDetails(id: number): Observable< Character> {
    return this.http.get<Character>(environment.apiUrl + 'people/' + id );
  }
}
