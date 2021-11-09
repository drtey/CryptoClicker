import { TestBed } from '@angular/core/testing';

import { GamedataService } from './gamedata.service';

describe('GamedataService', () => {
  let service: GamedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
