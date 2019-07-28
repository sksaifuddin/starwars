import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListComponentComponent } from './filter-list-component.component';

describe('FilterListComponentComponent', () => {
  let component: FilterListComponentComponent;
  let fixture: ComponentFixture<FilterListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
