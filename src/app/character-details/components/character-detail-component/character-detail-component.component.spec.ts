import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponentComponent } from './character-detail-component.component';

describe('CharacterDetailComponentComponent', () => {
  let component: CharacterDetailComponentComponent;
  let fixture: ComponentFixture<CharacterDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
