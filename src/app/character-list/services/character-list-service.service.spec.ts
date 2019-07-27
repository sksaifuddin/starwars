import { TestBed } from '@angular/core/testing';

import { CharacterListServiceService } from './character-list-service.service';

describe('CharacterListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterListServiceService = TestBed.get(CharacterListServiceService);
    expect(service).toBeTruthy();
  });
});
