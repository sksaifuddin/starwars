import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetailsService } from '../../services/character-details.service';
import { Character } from 'src/app/character-list/models/character.model';

@Component({
  selector: 'app-character-details-container',
  templateUrl: './character-details-container.component.html',
  styleUrls: ['./character-details-container.component.css']
})
export class CharacterDetailsContainerComponent implements OnInit {
  characterDetails: Character;

  constructor( private route: ActivatedRoute,private router: Router, private characterService: CharacterDetailsService) { }

  ngOnInit() {
    this.getCharacterData();
  }

  getCharacterData() {
    const id: number =  +this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacterDetails(id).subscribe(
      (data) => this.characterDetails = data,
      (err) => console.log('Error while fetching character', err)
    );
  }

}
