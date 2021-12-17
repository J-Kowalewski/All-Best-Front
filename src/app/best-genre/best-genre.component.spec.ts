import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGenreComponent } from './best-genre.component';

describe('BestGenreComponent', () => {
  let component: BestGenreComponent;
  let fixture: ComponentFixture<BestGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
