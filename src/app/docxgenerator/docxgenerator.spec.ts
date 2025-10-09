import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docxgenerator } from './docxgenerator';

describe('Docxgenerator', () => {
  let component: Docxgenerator;
  let fixture: ComponentFixture<Docxgenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docxgenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docxgenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
