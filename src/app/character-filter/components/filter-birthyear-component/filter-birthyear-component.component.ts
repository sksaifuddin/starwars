import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CharacterFilterService } from '../../services/character-filter.service';


@Component({
  selector: 'app-filter-birthyear-component',
  templateUrl: './filter-birthyear-component.component.html',
  styleUrls: ['./filter-birthyear-component.component.css']
})
export class FilterBirthyearComponentComponent implements OnInit {
  birthForm: FormGroup;
  birthRange = {
    startDate: '',
    endDate: ''
  };

  constructor(private filterService: CharacterFilterService) { }

  ngOnInit() {
    this.birthForm = new FormGroup({
      startBirthYear: new FormControl(''),
      endBirthYear: new FormControl(''),
    });
  }

  submitDate() {
    if (this.birthForm.valid) {
      this.birthRange.startDate = this.birthForm.get('startBirthYear').value;
      this.birthRange.endDate = this.birthForm.get('endBirthYear').value;
      this.filterService.birthYearFilter.next(this.birthRange);
    }
  }

}
