import { TestBed } from '@angular/core/testing';

import { CharacterFilterService } from './character-filter.service';

describe('CharacterFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterFilterService = TestBed.get(CharacterFilterService);
    expect(service).toBeTruthy();
  });
});
