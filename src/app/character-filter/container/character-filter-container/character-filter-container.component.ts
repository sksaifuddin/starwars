import { Component, OnInit } from '@angular/core';
import { CharacterFilterService } from '../../services/character-filter.service';
import { Movies } from '../../models/movies.model';
import { combineLatest, withLatestFrom } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character-filter-container',
  templateUrl: './character-filter-container.component.html',
  styleUrls: ['./character-filter-container.component.css']
})
export class CharacterFilterContainerComponent implements OnInit {

  constructor(private filterService: CharacterFilterService) { }

  ngOnInit() {
  }

}
