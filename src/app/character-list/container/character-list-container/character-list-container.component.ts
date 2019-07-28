import { Component, OnInit } from '@angular/core';
import { CharacterListServiceService } from '../../services/character-list-service.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list-container',
  templateUrl: './character-list-container.component.html',
  styleUrls: ['./character-list-container.component.css']
})
export class CharacterListContainerComponent implements OnInit {
  charactersData: Character[];
  constructor(private CharacterList: CharacterListServiceService) { }

  ngOnInit() {
    this.CharacterList.getAllCharacters().subscribe(
      (data) => this.charactersData = data,
      (err) => console.log('Error while fetching the character data', err),
    );
}


}
