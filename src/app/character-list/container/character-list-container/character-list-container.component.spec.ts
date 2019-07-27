import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListContainerComponent } from './character-list-container.component';

describe('CharacterListContainerComponent', () => {
  let component: CharacterListContainerComponent;
  let fixture: ComponentFixture<CharacterListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
