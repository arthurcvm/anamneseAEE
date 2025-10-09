import { TestBed } from '@angular/core/testing';

import { Docx } from './docx';

describe('Docx', () => {
  let service: Docx;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Docx);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
