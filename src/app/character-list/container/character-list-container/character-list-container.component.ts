import { Component, OnInit } from '@angular/core';
import { CharacterListServiceService } from '../../services/character-list-service.service';
import { Character } from '../../models/character.model';
import { CharacterFilterService } from 'src/app/character-filter/services/character-filter.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character-list-container',
  templateUrl: './character-list-container.component.html',
  styleUrls: ['./character-list-container.component.css']
})
export class CharacterListContainerComponent implements OnInit {
  charactersData: Character[] = [];
  filteredCharacters: Character[];
  movieFilters: string[];
  speciesFilters: string[];
  birthRangeFilters: string[];
  constructor(private characterList: CharacterListServiceService, private filterService: CharacterFilterService) { }

  ngOnInit() {
    this.getAllCharacters();
    this.getMovieFilterValues();
    this.getSpeciesFilterValues();
    this.getBirthFilterValues();
  }

  getAllCharacters() {
    for (let i = 1; i <= 9; i++) {
      this.characterList.getCharacters(i).subscribe(
        (data) => this.charactersData.push(...data['results']),
        (err) => console.log('Error while fetching the character data', err),
        () => this.filteredCharacters = this.charactersData
      );
    }
  }

  getMovieFilterValues() {
    this.filterService.movieFilter.subscribe(val => {
      this.movieFilters = val['people'];
      this.getFilteringData(this.movieFilters, this.speciesFilters);
    });
  }

  getSpeciesFilterValues() {
    this.filterService.speciesFilter.subscribe(val => {
      this.speciesFilters = val['characters'];
      this.getFilteringData(this.movieFilters, this.speciesFilters);
    });
  }

  getBirthFilterValues() {
    this.filterService.birthYearFilter.subscribe(val => {
      const startYear = val['startDate'];
      const endYear = val['endDate'];
      this.birthRangeFilters =  this.charactersData.map((characterData) => {
        if (this.setBirthYearRange(characterData.birth_year, startYear, endYear)) {
            return characterData.url;
         }
      }).filter(notUndefined => notUndefined);
    });
  }

  setBirthYearRange(characterBirthDay, selectedStartBirthDate, selectedendBirthDate): boolean {
    const characterBirthYear = this.getBirthYear(characterBirthDay);
    const characterBirthYearStandard = this.getBirthYearStandard(characterBirthDay);
    const selectedStartBirthYear = this.getBirthYear(selectedStartBirthDate);
    const selectedStartBirthYearStandard = this.getBirthYearStandard(selectedStartBirthDate);
    const selectedEndBirthYear = this.getBirthYear(selectedendBirthDate);
    const selectedEndBirthYearStandard = this.getBirthYearStandard(selectedendBirthDate);
    if (characterBirthYearStandard === selectedStartBirthYearStandard) {
      if (characterBirthYear <= selectedStartBirthYear) {
        return true;
      }
    } else {
      if (characterBirthYear <= selectedEndBirthYear) {
        return true;
      }
    }
  }


  getBirthYear(birthDate: string): number {
    const birthDateLength = birthDate.length;
    let birthYear = '';
    for (let i = birthDateLength-4; i >= 0; i--) {
      birthYear += birthDate[i];
    }
    return +birthYear.split('').reverse().join('');
  }

  getBirthYearStandard(birthDate: string): string {
    const  birthDateLength = birthDate.length;
    return birthDate[birthDateLength - 3] + birthDate[birthDateLength - 2] + birthDate[birthDateLength - 1];
  }

getFilteringData(movieFilters: string[] = [], speciesFilters: string[] = [], birthRangeFilters: string[] = [] ) {
  let filters;
  if (movieFilters.length > 0 && speciesFilters.length > 0 && birthRangeFilters.length > 0) {
    filters = movieFilters.filter(val => speciesFilters.indexOf(val) !== -1);
    filters = filters.filter(val => birthRangeFilters.indexOf(val) !== -1);
  } else if (movieFilters.length > 0 && speciesFilters.length > 0) {
    filters = movieFilters.filter(val => speciesFilters.indexOf(val) !== -1);
  } else if (speciesFilters.length > 0 && birthRangeFilters.length > 0) {
    filters = speciesFilters.filter(val => birthRangeFilters.indexOf(val) !== -1);
  } else if (movieFilters.length > 0 && birthRangeFilters.length > 0) {
    filters = movieFilters.filter(val => birthRangeFilters.indexOf(val) !== -1);
  } else if (movieFilters.length > 0) {
    filters = movieFilters;
  } else if (speciesFilters.length > 0) {
    filters = speciesFilters;
  } else if(birthRangeFilters.length > 0) {
    filters = birthRangeFilters;
  }
  this.filterCharacterList(filters);
}

filterCharacterList(characters: string[]) {
  const filterCharacters = this.charactersData.filter(val => characters.indexOf(val.url) !== -1 );
  this.filteredCharacters = filterCharacters;
}


}
