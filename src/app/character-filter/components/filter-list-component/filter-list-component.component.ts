import { Component, OnInit } from '@angular/core';
import { CharacterFilterService } from '../../services/character-filter.service';
import { Movies, SelectLabels } from '../../models/movies.model';
import { SpeciesService } from '../../services/species.service';
import { Species } from '../../models/species.model';

@Component({
  selector: 'app-filter-list-component',
  templateUrl: './filter-list-component.component.html',
  styleUrls: ['./filter-list-component.component.css']
})
export class FilterListComponentComponent implements OnInit {
  movieList: Movies[];
  speciesList: Species[] = [];
  labels = {
    movies: 'Movie',
    species: 'Species'
  };

  constructor(private filterService: CharacterFilterService, private speciesService: SpeciesService) { }

  ngOnInit() {
    this.getAllMoviesList();
    this.getAllSpeciesList();
  }

  getAllMoviesList() {
    this.filterService.getAllMovies().subscribe(
      (data) => this.movieList = data,
      (err) => console.log('Error while fetching Movies', err)
    );
  }

  getAllSpeciesList() {
    for(let i = 1; i <= 4; i++) {
      this.speciesService.getSpecies(i).subscribe(
        (data) => {
          this.speciesList.push(...data['results']);
        },
        (err) => console.log(err)
      );
    }
  }

}
