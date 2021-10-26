import { Movie } from '../domain/movie.model';

export class MovieUiModel {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  movies?: Array<Movie>;
}

export interface Payload {
  query: string;
  page: number;
}
