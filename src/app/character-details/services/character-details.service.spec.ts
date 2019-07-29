import { TestBed } from '@angular/core/testing';

import { CharacterDetailsService } from './character-details.service';

describe('CharacterDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterDetailsService = TestBed.get(CharacterDetailsService);
    expect(service).toBeTruthy();
  });
});
