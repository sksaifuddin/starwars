import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/character-list/models/character.model';
import { CharacterDetailsService } from '../../services/character-details.service';
import { Species } from 'src/app/character-filter/models/species.model';
import { SpaceShips } from '../../models/space-ships.model';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-character-detail-component',
  templateUrl: './character-detail-component.component.html',
  styleUrls: ['./character-detail-component.component.css']
})
export class CharacterDetailComponentComponent implements OnInit {
  characterDetails: Character;
  speciesDetails: Species[] = [];
  spaceShipsDetails: SpaceShips[] = [];
  moviesDetails: Movies[] = [];
  constructor(private characterDetailsService: CharacterDetailsService) { }

  @Input('characterDetails')
  set character(data: Character) {
    if (data) {
      this.characterDetails = data;
      this.getSpeciesData(this.characterDetails.species);
      this.getSpaceShipDetails(this.characterDetails.starships);
      this.getMoviesData(this.characterDetails.films);
    }
  }

  getSpeciesData(speciesData: string[]) {
    speciesData.forEach((data) => {
      this.characterDetailsService.getSpeciesDetails(data).subscribe((species) => this.speciesDetails.push(species));
    });
  }

  getSpaceShipDetails(spaceShipsUrls: string[]) {
    spaceShipsUrls.forEach((data) => {
      this.characterDetailsService.getSpaceShipDetails(data).subscribe((spaceShips) => this.spaceShipsDetails.push(spaceShips));
    });
  }

  getMoviesData(moviesUrl: string[]) {
    moviesUrl.forEach((data) => {
      this.characterDetailsService.getMoviesDetails(data).subscribe((movies) => this.moviesDetails.push(movies));
    });
  }

  ngOnInit() {
  }

}
