import { TestBed } from '@angular/core/testing';

import { CatImagesService } from './cat-images.service';

describe('CatImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatImagesService = TestBed.get(CatImagesService);
    expect(service).toBeTruthy();
  });
});
