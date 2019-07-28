import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilterContainerComponent } from './character-filter-container.component';

describe('CharacterFilterContainerComponent', () => {
  let component: CharacterFilterContainerComponent;
  let fixture: ComponentFixture<CharacterFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFilterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
