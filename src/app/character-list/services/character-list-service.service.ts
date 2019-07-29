import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Character, PersonRes } from '../models/character.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterListServiceService {

  constructor(private http: HttpClient) { }

  getCharacters(i): Observable<PersonRes> {
    return this.http.get<PersonRes>(environment.apiUrl + 'people/?page=' + i);
  }

}
