import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDropdownComponentComponent } from './filter-dropdown-component.component';

describe('FilterDropdownComponentComponent', () => {
  let component: FilterDropdownComponentComponent;
  let fixture: ComponentFixture<FilterDropdownComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDropdownComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDropdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
