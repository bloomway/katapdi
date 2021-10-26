import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './infra/components/movie-list/movie-list.component';
import { MovieItemComponent } from './infra/components/movie-item/movie-item.component';
import { EditMovieComponent } from './infra/components/edit-movie/edit-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalPagesPipe } from './infra/pipes/total-pages/total-pages.pipe';
import { MoviePaginationComponent } from './infra/components/movie-pagination/movie-pagination.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent,
    EditMovieComponent,
    TotalPagesPipe,
    MoviePaginationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MovieListComponent, EditMovieComponent],
})
export class MovieModule {}
