import { TestBed } from '@angular/core/testing';

import { ArticlesOnlineService } from './articlesonline.service';

describe('OnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesOnlineService = TestBed.get(ArticlesOnlineService);
    expect(service).toBeTruthy();
  });
});
