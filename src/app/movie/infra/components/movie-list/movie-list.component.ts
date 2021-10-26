import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { EMPTY, Observable, of } from 'rxjs';
import {
  catchError,
  debounce,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { MovieUiModel, Payload } from '../../../dto/movie.dto';
import { GetMoviesService } from '../../services/get-movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  searchTerm: FormControl = this.formBuilder.control('');;
  movies$: Observable<MovieUiModel> = this.searchTerm.valueChanges.pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((query) => {
      return this.getMoviesService.getMovies({ query: query, page: 0 }).pipe(
        catchError((err) => {
          console.error(err);
          return EMPTY;
        })
      );
    })
  );;

  constructor(
    private getMoviesService: GetMoviesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
