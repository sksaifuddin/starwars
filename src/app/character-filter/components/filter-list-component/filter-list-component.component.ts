import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-list-component',
  templateUrl: './filter-list-component.component.html',
  styleUrls: ['./filter-list-component.component.css']
})
export class FilterListComponentComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

  getAllMovies() {
    console.log('hello');
  }

}
