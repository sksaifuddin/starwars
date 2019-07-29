import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Character } from '../../models/character.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list-component',
  templateUrl: './character-list-component.component.html',
  styleUrls: ['./character-list-component.component.css']
})
export class CharacterListComponentComponent implements OnInit {
  characters: Character[] = [];
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Character>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router) { }

  @Input('characterDetails')
  set allCharacters(data: Character[]) {
      if (data) {
        this.characters = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
  }

  getId(character: Character) {
    if (character) {
      const characterValues = character.url.split('/');
      const characterId = +characterValues[5];
      this.router.navigateByUrl('character/' + characterId);
    }
  }

  ngOnInit() {
  }

}
