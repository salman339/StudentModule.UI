import { TestBed } from '@angular/core/testing';

import { NotifiersService } from './notifiers.service';

describe('NotifiersService', () => {
  let service: NotifiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
