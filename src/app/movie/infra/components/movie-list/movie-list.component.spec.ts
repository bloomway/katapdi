import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {MoviePaginationComponent} from '../movie-pagination/movie-pagination.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GetMoviesService} from '../../services/get-movies.service';
import {By} from '@angular/platform-browser';
import {EditMovieComponent} from '../edit-movie/edit-movie.component';
import {TotalPagesPipe} from '../../pipes/total-pages/total-pages.pipe';
import {defaultMovie} from '../../../domain/movie.model';
import {of} from 'rxjs';
import {startWith, tap} from 'rxjs/operators';

describe('MovieListComponent', () => {
    let component: MovieListComponent;
    let fixture: ComponentFixture<MovieListComponent>;
    let getMoviesServiceSpy: jasmine.SpyObj<GetMoviesService>;
    const expectedUiMovie = {
        currentPage: 0,
        totalPages: 3,
        totalItems: 60,
        movies: [{...defaultMovie}, {...defaultMovie}]
    };

    beforeEach(async () => {
        getMoviesServiceSpy = jasmine.createSpyObj<GetMoviesService>('GetMoviesService',
            ['getMovies']);

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
            providers: [{provide: GetMoviesService, useValue: getMoviesServiceSpy}]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
        getMoviesServiceSpy.getMovies.and.returnValue(of(expectedUiMovie));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show each movie item', async () => {
        component.searchTerm.valueChanges.pipe(startWith(''));
        fixture.detectChanges();
        await fixture.whenStable();

        fixture.detectChanges();
        const items: MovieItemComponent[] = fixture.debugElement.queryAll(
            By.directive(MovieItemComponent)
        ).map(c => c.componentInstance);

        expect(items.length).toEqual(expectedUiMovie.movies.length);
    });

    it('should render one app-movie-pagination', async () => {
        component.searchTerm.valueChanges.pipe(startWith(''));
        fixture.detectChanges();

        await fixture.whenStable();
        fixture.detectChanges();
        const items = fixture.debugElement.queryAll(By.directive(MoviePaginationComponent));
        expect(items.length).toEqual(1);
    });

    it('should show each edit movie item', async () => {
        component.searchTerm.valueChanges.pipe(startWith(''));
        fixture.detectChanges();
        await fixture.whenStable();

        fixture.detectChanges();
        const items: EditMovieComponent[] = fixture.debugElement.queryAll(
            By.directive(EditMovieComponent)
        ).map(c => c.componentInstance);
        expect(items.length).toEqual(expectedUiMovie.movies.length);
    });
});
