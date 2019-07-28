import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsContainerComponent } from './character-details-container.component';

describe('CharacterDetailsContainerComponent', () => {
  let component: CharacterDetailsContainerComponent;
  let fixture: ComponentFixture<CharacterDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
