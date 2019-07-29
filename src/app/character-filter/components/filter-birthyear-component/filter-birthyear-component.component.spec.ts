import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBirthyearComponentComponent } from './filter-birthyear-component.component';

describe('FilterBirthyearComponentComponent', () => {
  let component: FilterBirthyearComponentComponent;
  let fixture: ComponentFixture<FilterBirthyearComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBirthyearComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBirthyearComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
