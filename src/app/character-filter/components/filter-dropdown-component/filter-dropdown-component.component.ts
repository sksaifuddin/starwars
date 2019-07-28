import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../models/movies.model';
import { Species } from '../../models/species.model';

@Component({
  selector: 'app-filter-dropdown-component',
  templateUrl: './filter-dropdown-component.component.html',
  styleUrls: ['./filter-dropdown-component.component.css']
})
export class FilterDropdownComponentComponent implements OnInit {
  selectData: Movies[] | Species[];

  @Input('selectionList')
  set selectList(data: Movies[] | Species[]) {
    if (data) {
      console.log('list', data);
      this.selectData = data;
    }
  }

  @Input() label;


  constructor() { }

  ngOnInit() {
  }

}
