import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieItemComponent } from './movie-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {defaultMovie, Movie} from '../../../domain/movie.model';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;
  const movie: Movie =  { ...defaultMovie };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          MovieItemComponent,
      ],
      imports: [
          ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
