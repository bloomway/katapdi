import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    this.editMovieForm = this.formBuilder.group({
      isAdult: this.formBuilder.control(this.movie.adult),
      minutes: this.formBuilder.control(this.movie.runtimeMinutes),
      startYear: this.formBuilder.control(this.movie.startYear),
      endYear: this.formBuilder.control(this.movie.endYear),
      genres: this.formBuilder.control(this.movie.genres),
    });
  }
}
