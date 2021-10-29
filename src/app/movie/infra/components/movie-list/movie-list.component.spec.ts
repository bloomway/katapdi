import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {MoviePaginationComponent} from '../movie-pagination/movie-pagination.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GetMoviesServiceMock} from './mock/get-movies.service.mock';
import {GetMoviesService} from '../../services/get-movies.service';
import {By} from '@angular/platform-browser';
import {EditMovieComponent} from '../edit-movie/edit-movie.component';
import {TotalPagesPipe} from '../../pipes/total-pages/total-pages.pipe';

describe('MovieListComponent', () => {
    let component: MovieListComponent;
    let fixture: ComponentFixture<MovieListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                MovieListComponent,
                MovieItemComponent,
                EditMovieComponent,
                TotalPagesPipe,
                MoviePaginationComponent
            ],
            imports: [
                ReactiveFormsModule,
            ],
          providers: [
            { provide: GetMoviesService, useClass: GetMoviesServiceMock }
          ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not render at least app-movie-item', () => {
      const movieItem = fixture.debugElement.query(By.css('app-movie-item'));
      expect(movieItem).toBeFalsy();
    });

    it('should not render app-movie-pagination', () => {
    const pagination = fixture.debugElement.query(By.css('app-movie-pagination'));
    expect(pagination).toBeFalsy();
  });
});

