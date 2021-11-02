import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieComponent } from './edit-movie.component';
import {ReactiveFormsModule} from '@angular/forms';
import {defaultMovie, Movie} from '../../../domain/movie.model';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;
  const movie: Movie = { ...defaultMovie };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovieComponent ],
      imports: [
          ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
