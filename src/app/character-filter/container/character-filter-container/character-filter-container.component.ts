import { Component, OnInit } from '@angular/core';
import { CharacterFilterService } from '../../services/character-filter.service';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-character-filter-container',
  templateUrl: './character-filter-container.component.html',
  styleUrls: ['./character-filter-container.component.css']
})
export class CharacterFilterContainerComponent implements OnInit {
  movieList: Movies[]
  constructor(private filterService: CharacterFilterService) { }

  ngOnInit() {
    this.filterService.getAllMovies().subscribe(
      (data) => this.movieList = data,
      (err) => console.log('Error while fetching Movies', err)
    );
  }

}
