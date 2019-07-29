import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/character-list/models/character.model';

@Component({
  selector: 'app-character-detail-component',
  templateUrl: './character-detail-component.component.html',
  styleUrls: ['./character-detail-component.component.css']
})
export class CharacterDetailComponentComponent implements OnInit {
  characterDetails: Character;
  constructor() { }

  @Input('characterDetails')
  set character(data) {
    if (data) {
      console.log('dat', data);
      this.characterDetails = data;
    }
  }

  ngOnInit() {
  }

}
