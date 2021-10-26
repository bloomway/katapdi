import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/movie/domain/movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  @Input()
  movie: Movie;

  editMovieForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const { isAdult, runtimeMinutes, startYear, endYear, genres } = this.movie;

    this.editMovieForm = this.formBuilder.group({
      isAdult: this.formBuilder.control(isAdult),
      minutes: this.formBuilder.control(runtimeMinutes),
      startYear: this.formBuilder.control(startYear),
      endYear: this.formBuilder.control(endYear),
      genres: this.formBuilder.control(genres),
    });
  }
}
